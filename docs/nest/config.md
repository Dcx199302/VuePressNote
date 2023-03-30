---
title: 开发环境配置
---

[视频讲解](https://coding.imooc.com/lesson/617.html#mid=59633)

## 一、使用dotenv 方案

> 官方使用的方案，适用于简单的配置

### 基础用法：

#### 1、安装 - 官方@nestjs/config

```cmd
npm i --save @nestjs/config
```

#### 2、创建 ``.env``  与src 同级文件

> .env 示例： 
>
> 新版的nest好像会自动加载根目录的env文件数据 。不要同时使用多种方案

```.env
DB=mysql
DB_HOST=127.0.0.1
DATABASE=test
DATABASE_PASSWORD=test123
```

#### 3、配置``src/app.module.ts``

> 在nest模块中加载配置文件.env

```typescript
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
// forRoot方法会去读取根目录下的 .env文件，加载config 配置文件的属性

@Module({
  imports: [
    ConfigModule.forRoot({
        // isGlobal可选,开启就可以全局访问 configService。 否则只能在当前模块
        isGlobal:true  
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
```



#### 4、在Service文件中使用

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './enum/config.enum';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {
      const db = this.config.get('db');
      //这里可以读取到config的配置信息
      
      // 使用枚举防止字符串书写错误-推荐
      const db = this.config.get(ConfigEnum.DB);
      const host = this.config.get(ConfigEnum.DB_HOST)
      
      console.log(db)
  }
}
```

> 创建枚举文件 ``src/enum/config.enum.ts``

```typescript
export enum ConfigEnum {
  DB = 'DB',
  DB_HOST = 'DB_HOST',
}
```



[视频讲解]: https://coding.imooc.com/lesson/617.html#mid=59633	"123"



------



### 进阶使用：

#### 1、创建多个环境 dev和prod

> 前面创建的 ``.env``作为公共配置。分别再创建开发和正式两个 env 文件

```.env
DB=mysql
DB_HOST=127.0.0.1
DATABASE=test
DATABASE_PASSWORD=test123
```



> ``src``同级创建``.env.development`` 和 ``.env.production``  两个文件

```.env.development
DB_RUL=www.dev.baidu.com
...
```

```.env.production
DB_RUL=www.prod.baidu.com
...
```

##### 

#### 2、配置app.module.ts

> 安装 dotenv

```cmd
npm i dotenv
```

配置

```typescript
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
// 默认使用 上面创建的 .env.production 配置文件
const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
        
      // 配置加载配置文件的环境 development Or production
      envFilePath,
        
      // 合并 .env 文件公用部分 配置
      load: [() => dotenv.config({ path: '.env' })],
    }),
  ],
})
export class AppModule {}
```

#### 3、在本地切换dev 和 prod 环境

```cmd
npm i -D cross-env
// 用于设置 process.env.NODE_ENV
```

> 修改``package.json`` 添加 cross-env NODE_ENV = development || production

```json
  "scripts": {
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
    "start:prod": "cross-env NODE_ENV=production node dist/main",
  },
```

```typescript
const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;
```





------



## 二、yaml 文件方案

### 基础用法

#### 1、安装 解析 yaml 文件的依赖，

```cmd
npm i js-yaml
npm i @types/js-yaml
```



#### 2、创建配置文件

> 在根目录创建``config/config.yml``文件

```yaml
db:
  mysql1:
    host: 127.0.0.1
    port: 3306

  mysql2:
    host: 127.0.0.1
    port: 3306
```

> config.yml同级创建``config.development.yml`` 和 ``config.production.yml``  两个文件

```yaml
db:
  mysql1:
    name: mysql-prod1
    port: 3306

  mysql2:
    name: mysql-prod2
    port: 3306
```

```yaml
db:
  mysql1:
    name: mysql-dev1
    port: 3306

  mysql2:
    name: mysql-dev2
    port: 3306
```





> 在src目录创建``configuration.ts``

```typescript
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const YAML_COMMON_CONFIG_FILENAME = 'config.yml';
const filePath = join(__dirname, '../config', YAML_COMMON_CONFIG_FILENAME);

const envPath = join(
  __dirname,
  '../config',
  `config.${process.env.NODE_ENV || 'development'}.yml`,
);

const commonConfig = yaml.load(readFileSync(filePath, 'utf-8'));

const envConfig = yaml.load(readFileSync(envPath, 'utf-8'));

// 因为 configModule 有一个 load 方法 需要传入一个函数，这里导出一个函数
export default () => {
  // 这里使用 lodash 中的合并函数
  return _.merge(commonConfig, envConfig);
};

```

安装 lodash

```typescript
npm i lodash

// 使用
import * as _ from 'lodash';
```





#### 3、在模块文件中加载配置

> app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal:true,  // isGlobal开启就可以全局访问
        load: [configuration],
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
```

#### 4、在Service文件中使用

#### 

```typescript
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './enum/config.enum';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {
      const db = this.config.get('db');
      //这里可以读取到config的配置信息
      
      // 使用枚举防止字符串书写错误-推荐
      const db = this.config.get(ConfigEnum.DB);
      const host = this.config.get(ConfigEnum.DB_HOST)
      
      console.log(db)
  }
}
```

> 创建枚举文件 ``src/enum/config.enum.ts``

```typescript
export enum ConfigEnum {
  DB = 'DB',
  DB_HOST = 'DB_HOST',
}
```



## 三、[使用第三方自动加载](https://www.npmjs.com/package/config)

> 别人写好的库，直接调用

 ```cmd
npm i config
 ```

> 根目录新建config文件夹

```any
|--src
|--config
   |--default.json
   |--produciton.json
   |--development.json
```

```json
{
  "database": {
    "port": 3306,
    "host": "localhost"
  }
}
// 直接写就行了。 三个文件都差不多- prod 和 dev 可以覆盖公用的default.json 配置
```



直接使用

```typescript
import * as config from 'config'

console.log(config.get('database'))
```



## 四、其他强大的库 [nestjs-config](https://github.com/nestjsx/nestjs-config)

