import{_ as t,p,q as e,Q as s,R as n,t as a,a1 as o}from"./framework-5866ffd3.js";const c={},l=n("h1",{id:"an进阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#an进阶","aria-hidden":"true"},"#"),a(" AN进阶")],-1),i=n("h2",{id:"父子传值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#父子传值","aria-hidden":"true"},"#"),a(" 父子传值")],-1),u=o(`<h4 id="子组件-ts" tabindex="-1"><a class="header-anchor" href="#子组件-ts" aria-hidden="true">#</a> <strong>子组件.ts</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit<span class="token punctuation">,</span>Output<span class="token punctuation">,</span> EventEmitter<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/app/services/login/login.service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> environment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/environments/environment&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Captcha</span><span class="token punctuation">{</span>
  <span class="token literal-property property">uid</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
  <span class="token literal-property property">imageName</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
  <span class="token literal-property property">values</span><span class="token operator">:</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token literal-property property">newListArray</span><span class="token operator">:</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;app-verification-code&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./verification-code.component.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./verification-code.component.less&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">VerificationCodeComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">service</span><span class="token operator">:</span> LoginService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  PhoneNumber<span class="token operator">:</span>number
  @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span> notify <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

  <span class="token literal-property property">iconSpin</span><span class="token operator">:</span>boolean <span class="token operator">=</span> <span class="token boolean">false</span>  <span class="token comment">//icon加载中</span>
  empty <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">uid</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">imageName</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">values</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token literal-property property">newListArray</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>  <span class="token comment">// 空的</span>
  <span class="token literal-property property">CaptchaData</span><span class="token operator">:</span>Captcha <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>empty  <span class="token comment">// 有数据</span>

  <span class="token comment">//获取验证码</span>
  <span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>iconSpin <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>CaptchaData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>empty

    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">getCaptchaImages</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>uid<span class="token punctuation">,</span> values<span class="token punctuation">,</span>imageName <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>

      <span class="token keyword">const</span> newData <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>environment<span class="token punctuation">.</span><span class="token constant">AUTH_CAPTCHA</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>uid<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;index=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token keyword">this</span><span class="token punctuation">.</span>CaptchaData <span class="token operator">=</span> <span class="token punctuation">{</span>uid<span class="token punctuation">,</span>imageName<span class="token punctuation">,</span> values<span class="token punctuation">,</span><span class="token literal-property property">newListArray</span><span class="token operator">:</span>newData<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>iconSpin <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理有效的验证码</span>
  <span class="token function">handleValidCodecaptcha</span><span class="token punctuation">(</span><span class="token parameter">numb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>uid<span class="token punctuation">,</span>values<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>CaptchaData
    <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span><span class="token function">validCapchaImage</span><span class="token punctuation">(</span>uid<span class="token punctuation">,</span> values<span class="token punctuation">[</span>numb<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>
      <span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>notify<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>CaptchaData<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>CaptchaData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>empty
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;拿到号码：发送短信&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>PhoneNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;点击错误，重新选择&#39;</span><span class="token punctuation">)</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子组件-html" tabindex="-1"><a class="header-anchor" href="#子组件-html" aria-hidden="true">#</a> <strong>子组件.html</strong></h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span><span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CaptchaData.values.length &gt; 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>点击图中 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>{{CaptchaData.imageName}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> 获取验证码<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getCaptcha()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">nz-icon</span> <span class="token attr-name">[nzType]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>sync&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[nzSpin]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconSpin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span><span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span> 15px 0px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let item of CaptchaData.newListArray,let i = index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValidCodecaptcha(i)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">[src]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="父组件-ts" tabindex="-1"><a class="header-anchor" href="#父组件-ts" aria-hidden="true">#</a> <strong>父组件.ts</strong></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit<span class="token punctuation">,</span> ViewChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// Antd-Angular</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AbstractControl<span class="token punctuation">,</span> FormBuilder<span class="token punctuation">,</span> FormGroup<span class="token punctuation">,</span> Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VerificationCodeComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/app/components/verification-code/verification-code.component&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;app-test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./test.component.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./test.component.less&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
    
  <span class="token function">handleNotify</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//子调用父组件的方法  并传入值value过来</span>
    
  <span class="token punctuation">}</span>
    
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">)</span>   <span class="token comment">//需要在html中打标记  #child</span>
  <span class="token literal-property property">verificationS</span><span class="token operator">:</span>VerificationCodeComponent      <span class="token comment">//一、拿子组件的方法过来，父组件中调用</span>
    
  <span class="token function">handleChildMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                        
    <span class="token keyword">this</span><span class="token punctuation">.</span>verificationS<span class="token punctuation">.</span><span class="token function">getCaptcha</span><span class="token punctuation">(</span><span class="token punctuation">)</span>			   <span class="token comment">//二、直接调用子组件的方法</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="父组件-html" tabindex="-1"><a class="header-anchor" href="#父组件-html" aria-hidden="true">#</a> <strong>父组件.html</strong></h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChildMethod()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>发起请求，发送number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-verification-code</span> <span class="token attr-name">#child</span> <span class="token attr-name">[PhoneNumber]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>13059224802&#39;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">(notify)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleNotify($event)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-verification-code</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>挡住<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(r,d){return p(),e("div",null,[l,i,s(" tabs:start "),u,s(" tabs:end ")])}const m=t(c,[["render",k],["__file","Preintermediate.html.vue"]]);export{m as default};