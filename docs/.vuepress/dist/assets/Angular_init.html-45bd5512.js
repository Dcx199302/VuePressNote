import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h2 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h2><p>Angular CLI</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//ng build	</span>
<span class="token comment">//把 Angular 应用编译到一个输出目录中。</span>

<span class="token comment">//ng serve	</span>
<span class="token comment">//构建你的应用并启动开发服务器，当有文件变化时就重新构建。</span>

<span class="token comment">//ng generate	</span>
<span class="token comment">//基于原理图（schematic）生成或修改某些文件。</span>

<span class="token comment">//ng test	</span>
<span class="token comment">//在指定的项目上运行单元测试。</span>

<span class="token comment">//ng e2e	</span>
<span class="token comment">//构建一个 Angular 应用并启动开发服务器，然后运行端到端测试。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建组件" tabindex="-1"><a class="header-anchor" href="#创建组件" aria-hidden="true">#</a> <strong>创建组件</strong></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>创建组件 ng generate service heroes<span class="token operator">/</span>hero
  
   缩写 ng g c <span class="token operator">*</span>name<span class="token operator">*</span>  创建组件compoents

	card<span class="token punctuation">.</span>component<span class="token punctuation">.</span>html  <span class="token comment">//模板</span>
	card<span class="token punctuation">.</span>component<span class="token punctuation">.</span>less  <span class="token comment">//样式</span>
	card<span class="token punctuation">.</span>component<span class="token punctuation">.</span>spec<span class="token punctuation">.</span>ts  <span class="token comment">//不用管</span>
	card<span class="token punctuation">.</span>component<span class="token punctuation">.</span>ts <span class="token comment">//逻辑状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建可注入服务serve" tabindex="-1"><a class="header-anchor" href="#创建可注入服务serve" aria-hidden="true">#</a> 创建可注入服务serve</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>ng generate service heroes<span class="token operator">/</span>hero
	 缩写 ng g s <span class="token operator">*</span>name<span class="token operator">*</span>  创建服务serve



<span class="token comment">//hero.service.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>       <span class="token comment">//装饰器</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>    <span class="token comment">//表示整个应用程序中都是可见的</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HeroService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>


<span class="token comment">//需要用到服务的组件中</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HeroService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../serves/hero.service&#39;</span>

<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> <span class="token literal-property property">SearchServie</span><span class="token operator">:</span>SearchServie<span class="token punctuation">)</span> <span class="token comment">//可以使用SearchServie服务了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>card.component.ts</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;hello-world&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;h2&gt;Hello World&lt;/h2&gt;
    &lt;p&gt;This is my first component!&lt;/p&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorldComponent</span> <span class="token punctuation">{</span>
  <span class="token comment">// The code in this class drives the component&#39;s behavior.</span>
    message <span class="token operator">=</span> <span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">;</span>  <span class="token comment">//数据状态</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模板语法</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Angular 还支持属性绑定，以帮助你设置 HTML 元素的 Property 和 Attribute 的值，</strong></p><p><strong>并将这些值传给应用的展示逻辑。</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">[id]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHelloId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[style.color]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>You can set my color in the component!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>时间监听器</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayMessage()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[disabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Trigger alert message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h1><h5 id="card-component-ts" tabindex="-1"><a class="header-anchor" href="#card-component-ts" aria-hidden="true">#</a> card.component.ts</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
 
@<span class="token function">Component</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;hello-world-bindings&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//组件name</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./hello-world-bindings.component.html&#39;</span>   <span class="token comment">//模板路径</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorldBindingsComponent</span> <span class="token punctuation">{</span>
    fontColor <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span>   <span class="token comment">//各种装填</span>
    sayHelloId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    canClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    message <span class="token operator">=</span> <span class="token string">&#39;Hello, World&#39;</span><span class="token punctuation">;</span>
    <span class="token function">sayMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>         <span class="token comment">//事件</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="card-component-html" tabindex="-1"><a class="header-anchor" href="#card-component-html" aria-hidden="true">#</a> card.component.html</h5><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayMessage()<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[disabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Trigger alert message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">[id]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sayHelloId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[style.color]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontColor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>You can set my color in the component!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>// *ngFor
// *ngIf
// [title]=&quot;product.name + &#39; details&#39;&quot;
// {{ product.name }} 插值
// (click)=&quot;share()&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let product of products<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">[title]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product.name + &#39; details&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ product.name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
   

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product.description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Description: {{ product.description }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>share()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Share
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let in of constructor(10);let index=index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件使用" tabindex="-1"><a class="header-anchor" href="#组件使用" aria-hidden="true">#</a> 组件使用</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//所以组件需要在 app.module.js中进行声明，而不是单独在文件中引入
@NgModule({
 declarations: [   //declarations 声明
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent
  ]
})
//使用的时候直接用组件就了
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-product-alerts</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-product-alerts</span><span class="token punctuation">&gt;</span></span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父组件传值子组件" tabindex="-1"><a class="header-anchor" href="#父组件传值子组件" aria-hidden="true">#</a> 父组件传值子组件</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">//父传出</span>
<span class="token operator">&lt;</span>app<span class="token operator">-</span>product<span class="token operator">-</span>alerts <span class="token punctuation">[</span>product<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;product&quot;</span> <span class="token operator">&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-product-alerts</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">//子接受</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ProductAlertsComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> product<span class="token operator">:</span> any<span class="token punctuation">;</span>
  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> list<span class="token operator">:</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">//字符串形式的数组</span>
<span class="token punctuation">}</span>

<span class="token comment">//子使用</span>
<span class="token operator">&lt;</span>p <span class="token operator">*</span>ngIf<span class="token operator">=</span><span class="token string">&quot;product.price &gt; 700&quot;</span><span class="token operator">&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件调用父组件方法" tabindex="-1"><a class="header-anchor" href="#子组件调用父组件方法" aria-hidden="true">#</a> 子组件调用父组件方法</h3><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">//子创建事件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Output<span class="token punctuation">,</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ProductAlertsComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span> notify <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//自定义事件notify</span>
<span class="token punctuation">}</span>
<span class="token comment">//子触发自定义事件</span>
<span class="token operator">&lt;</span><span class="token function">button</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;notify.emit()&quot;</span><span class="token operator">&gt;</span>Notify Me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">//父接收到事件时，触发自身对应的onNotify()事件</span>
  <span class="token operator">&lt;</span>app<span class="token operator">-</span>product<span class="token operator">-</span><span class="token function">alerts</span> <span class="token punctuation">(</span>notify<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;onNotify()&quot;</span><span class="token operator">&gt;</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-product-alerts</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">//普通事件调用</span>
<span class="token operator">&lt;</span><span class="token function">button</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;share()&quot;</span><span class="token operator">&gt;</span>Share<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">//1.引入写好的组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ProductDetailsComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./product-details/product-details.component&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//2.书写路由  app.module.ts  ==&gt;  imports:[]  ==&gt;  RouterModule.forRoot([{},{},{}])  </span>
<span class="token comment">//        =====&gt; {path:&#39;&#39;,component:ProductDetailsComponent}</span>

例：RouterModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    	<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ProductListComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
    	<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;products/:productId&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> ProductDetailsComponent <span class="token punctuation">}</span>   
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//3.HTML中使用</span>
<span class="token comment">//  &lt;a [routerLink]=&quot;[&#39;/&#39;]&quot;&gt;点击跳转主页&lt;/a&gt;</span>
<span class="token comment">//	&lt;a routerLink=&quot;/cart&quot;&gt;运费查询&lt;/a&gt;</span>
<span class="token comment">//  &lt;a [routerLink]=&quot;[&#39;/products&#39;, product.id]&quot;&gt; 根据ID跳转页面 &lt;/a&gt;</span>


<span class="token comment">//路由的参数js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ActivatedRoute<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angluar/router&#39;</span>
<span class="token function">constructor</span><span class="token punctuation">(</span>
	<span class="token keyword">private</span> <span class="token literal-property property">route</span><span class="token operator">:</span>ActivatedRoute<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token comment">//this.route.params.subscribe(item=&gt;{  console.log(item.id)  })</span>


<span class="token comment">//路由的方法js 跳转什么的~</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Location<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common&#39;</span>
<span class="token function">constructor</span><span class="token punctuation">(</span>
	<span class="token keyword">public</span> <span class="token literal-property property">location</span><span class="token operator">:</span>Location
<span class="token punctuation">)</span>
<span class="token comment">//location.back()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//父组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-child</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>插槽内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>其他sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-child</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

//子组件

  <span class="token comment">&lt;!-- 插槽预留位置 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-content</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-content</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明周期" tabindex="-1"><a class="header-anchor" href="#声明周期" aria-hidden="true">#</a> 声明周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//最先被执行 }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="serves-数据共享" tabindex="-1"><a class="header-anchor" href="#serves-数据共享" aria-hidden="true">#</a> serves 数据共享</h3><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>1. 创建service服务
ng g s service/search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http请求" tabindex="-1"><a class="header-anchor" href="#http请求" aria-hidden="true">#</a> HTTP请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 注册http服务
<span class="token comment">//app.module.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClitentModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">imports</span><span class="token operator">:</span><span class="token punctuation">[</span>
<span class="token comment">//        AppRoutingModule,</span>
          HttpClientModule
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token number">2.</span>组件使用http
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span>

<span class="token function">constructor</span><span class="token punctuation">(</span>
	<span class="token keyword">private</span> <span class="token literal-property property">http</span><span class="token operator">:</span>HttpClient<span class="token punctuation">;</span>   <span class="token comment">//注入http</span>
<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token function">getlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://tenant.51yundong.me/v3/.....&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">.</span>any</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface示例" tabindex="-1"><a class="header-anchor" href="#interface示例" aria-hidden="true">#</a> interface示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>demo
<span class="token comment">// 1. 没有interface</span>
    <span class="token comment">// function hello(obj:{label:string}){</span>
    <span class="token comment">//     console.log(obj);</span>
        
    <span class="token comment">// }</span>
    <span class="token comment">// hello({label:123})  //报错</span>
    <span class="token comment">// hello({label:&#39;正确传值&#39;}) </span>

<span class="token comment">//2. 使用了interface</span>
<span class="token keyword">interface</span> <span class="token class-name">labelobj</span><span class="token punctuation">{</span>
     <span class="token literal-property property">label</span><span class="token operator">:</span>string，
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">helloprint</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">labelobj</span><span class="token operator">:</span>labelobj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelobj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// helloprint({label:true}) //报错</span>
<span class="token function">helloprint</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">&#39;正确传值&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、interface具体写法" tabindex="-1"><a class="header-anchor" href="#二、interface具体写法" aria-hidden="true">#</a> 二、interface具体写法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定义对象</span>
<span class="token keyword">interface</span> <span class="token class-name">labelobj</span><span class="token punctuation">{</span>
     <span class="token literal-property property">label</span><span class="token operator">:</span>string，
     width<span class="token operator">?</span><span class="token operator">:</span>number，    <span class="token comment">//添加？号，代表可选参数</span>
     readonly x<span class="token operator">:</span>number<span class="token punctuation">,</span>  <span class="token comment">//readonly 只读，不可更改</span>
     <span class="token literal-property property">label</span><span class="token operator">:</span>string<span class="token operator">|</span>number  <span class="token comment">//多个类型 | 隔开</span>

<span class="token punctuation">}</span>

<span class="token comment">//定义函数</span>
<span class="token keyword">interface</span> <span class="token class-name">searchFunc</span><span class="token punctuation">{</span>
	 <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>boolean   <span class="token comment">//返回值要求数值类型</span>
     <span class="token punctuation">(</span>source<span class="token operator">:</span>number<span class="token punctuation">,</span>substr<span class="token operator">?</span><span class="token operator">:</span>number<span class="token punctuation">)</span><span class="token operator">:</span>boolean   <span class="token comment">//规定传入值</span>
<span class="token punctuation">}</span>
            <span class="token comment">//正确</span>
            <span class="token keyword">let</span> <span class="token literal-property property">sf</span><span class="token operator">:</span><span class="token function-variable function">searchFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">sr<span class="token punctuation">,</span>su</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> sr <span class="token operator">&gt;</span> su
            <span class="token punctuation">}</span>
            <span class="token function">sf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>

<span class="token comment">//Void  函数没有返回值</span>
<span class="token keyword">function</span> <span class="token function">say_hello</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">say_hello</span><span class="token punctuation">(</span><span class="token string">&#39;xiaoMing小明&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="null-和-underfined" tabindex="-1"><a class="header-anchor" href="#null-和-underfined" aria-hidden="true">#</a> null 和 underfined</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// --strictNullChecks:false 不可以写，会报错，true才可以这样写</span>
<span class="token keyword">let</span> <span class="token literal-property property">u</span><span class="token operator">:</span><span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token keyword">let</span> <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> <span class="token literal-property property">n1</span><span class="token operator">:</span>number <span class="token operator">=</span> <span class="token number">0</span>
n1 <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token keyword">let</span> <span class="token literal-property property">n12</span><span class="token operator">:</span>string<span class="token operator">|</span><span class="token keyword">null</span><span class="token operator">|</span><span class="token keyword">undefined</span>  <span class="token comment">//这样写好点，都没问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="array数组限制" tabindex="-1"><a class="header-anchor" href="#array数组限制" aria-hidden="true">#</a> Array数组限制</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">StringArr</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span>number<span class="token punctuation">]</span><span class="token operator">:</span>string<span class="token operator">|</span>number   <span class="token comment">//index代表索引</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span>StringArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>  <span class="token comment">//只能是字符和数字</span>

<span class="token keyword">let</span> <span class="token literal-property property">list</span><span class="token operator">:</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>  <span class="token comment">//只能是number类型的数组</span>
<span class="token keyword">let</span> <span class="token literal-property property">list</span><span class="token operator">:</span>Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment">//第二种写法</span>
<span class="token keyword">let</span> <span class="token literal-property property">strlist</span><span class="token operator">:</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="object对象限制" tabindex="-1"><a class="header-anchor" href="#object对象限制" aria-hidden="true">#</a> object对象限制</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">NumberDict</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span>string<span class="token punctuation">]</span><span class="token operator">:</span>number<span class="token operator">|</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span>number<span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span>string
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">numdict</span><span class="token operator">:</span>NumberDict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;username&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="枚举类型-限定几种选择" tabindex="-1"><a class="header-anchor" href="#枚举类型-限定几种选择" aria-hidden="true">#</a> 枚举类型(限定几种选择)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">enum</span> Dirction<span class="token punctuation">{</span>
    Up<span class="token operator">=</span><span class="token string">&quot;UP&quot;</span><span class="token punctuation">,</span>
    Down<span class="token operator">=</span><span class="token string">&quot;DOWN&quot;</span><span class="token punctuation">,</span>
    Left<span class="token operator">=</span><span class="token string">&quot;LEFT&quot;</span><span class="token punctuation">,</span>
    Right<span class="token operator">=</span><span class="token string">&quot;RIGHT&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">dirc</span><span class="token operator">:</span>Dirction <span class="token operator">=</span> Dirction<span class="token punctuation">.</span>Right

<span class="token keyword">if</span><span class="token punctuation">(</span>dirc <span class="token operator">==</span> Dirction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span>Dirction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组 tuple</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//了解一下</span>
<span class="token keyword">let</span> <span class="token literal-property property">numstuple</span><span class="token operator">:</span><span class="token punctuation">[</span>number<span class="token punctuation">,</span>string<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span>   <span class="token comment">//限定了第一个数字，第二个为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="断言" tabindex="-1"><a class="header-anchor" href="#断言" aria-hidden="true">#</a> 断言</h3><div class="language-javascriptx line-numbers-mode" data-ext="javascriptx"><pre class="language-javascriptx"><code>(&lt;string&gt;someValue).length;
(someValue as string).length;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有-公共" tabindex="-1"><a class="header-anchor" href="#私有-公共" aria-hidden="true">#</a> 私有 公共</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//private 私有的  </span>
<span class="token comment">//public 公共的</span>


<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>theName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> theName
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running.....</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;wangcai&#39;</span><span class="token punctuation">)</span>

animal<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animal<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//属性“name”为私有属性，只能在类“Animal”中访问。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="受保护的类" tabindex="-1"><a class="header-anchor" href="#受保护的类" aria-hidden="true">#</a> 受保护的类</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">theName</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> theName
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is running.....</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dogName</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>dogName<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">wangwang</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is wangwang</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//访问父类中受保护的属性</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;wangcai&#39;</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">wangwang</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、angular生命周期" tabindex="-1"><a class="header-anchor" href="#三、angular生命周期" aria-hidden="true">#</a> 三、Angular生命周期</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>Angular 会按以下顺序调用钩子方法：

ngOnChanges - 在输入属性 <span class="token punctuation">(</span>input<span class="token punctuation">)</span>/输出属性 <span class="token punctuation">(</span>output<span class="token punctuation">)</span>的绑定值发生变化时调用。

ngOnInit - 在第一次 ngOnChanges 完成后调用。  //请求，开启定时器

ngDoCheck - 开发者自定义变更检测。  类似Vue的watch，性能消耗较大  //少

ngAfterContentInit - 在组件内容初始化后调用。   //少

ngAfterContentChecked - 在组件内容每次检查后调用。  //少

ngAfterViewInit - 在组件视图初始化后调用。       //少

ngAfterViewChecked - 在组件视图每次检查后调用。   //少

ngOnDestroy - 在指令销毁前调用。      //定时器...等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","Angular_init.html.vue"]]);export{r as default};
