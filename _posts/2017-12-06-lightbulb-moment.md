---
layout: post
cardtitle: "That Lightbulb Moment&#33;"
title: "That Lightbulb Moment&#33;"
description: I finally &quot;got&quot; HTML/CSS/JavaScript collaboration by doing the same task four different ways.
date:   2017-12-06 15:42:00 +0500
categories: aha!
author: XZackaly
---

<div style="background-color:black;padding: 46px 16px 2px 16px;">
<p align="center" title="Stalag 17"> 
<img src="/images/stalag-17.jpg" alt="Stalag 17" >
 </p></div>
<br>
<br>
Ah, I remember my front-end coding lightbulb moment.  It was just like William Holden’s lightbulb moment in <span class="ttstyle"><span  class="tooltip" data-tip="Billy Wilder's 1953 Oscar winner">Stalag 17</span></span>. <br><br>
The puzzle of the machinations of HTML, CSS, and JavaScript revealed itself when I saw examples of HTML&#47;CSS&#47;JavaScript working together.<br><br> 
I tried out my newly acquired understanding by writing different ways to accomplish the same simple task of underlining some text.   
<br>
Here are four complete examples of front-end code that underlines text.  To execute them, use your favorite editor (Notepad, Sublime, Visual Studio Code, et.al.) and  copy/paste/save as a &quot;.html&quot; file.<br><br>
Ok, here we go:<br><br>
<h3>Underline Example 1.  This example uses the <code class="local02">&lt;u&gt;</code> tag.</h3>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>Underline Example 1</title>
</head>
<body>
  
    <p>Does this do <u>underline</u>&#63; YES - even though 
    &lt;u&gt; is deprecated in HTML5.
    </p>

</body>
</html>
{% endhighlight %}
<br>
<h3>Underline Example 2.  This example uses the attribute <code  class="local02">style=&quot;text-decoration: underline;&quot;</code> . Notice that the attribute can be used within different tags.
</h3>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>Underline Example 2</title>
</head>
<body>

  <p><span style="text-decoration: underline;">This line is underlined.
     </span>
  </p>
  <p style="text-decoration: underline;">This too is underlined.</p>
  <p>And here we underline and italicize
        <em style="text-decoration: underline;"> ONE</em> word.
  </p> 

</body>
</html>
{% endhighlight %}
<br>
<h3>Underline Example 3.  This example uses an inline style element tag <code class="local02">&lt;style&gt;...&lt;/style&gt;</code>.  Within the style tag, one <em>class</em> is defined - <code class="local02">.underl</code>.  In this example, the class has one <em>property</em> defined  - <code class="local02">text-decoration: underline;</code>.  The class is then used in HTML tags in the body.
</h3>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>Underline Example 3</title>
        <style>
         .underl {
            text-decoration: underline;
                 }
        </style>
</head>
<body>
    <p class="underl">And we can do it THIS way, too.</p>
    <p>Oh, does <span class="underl">THIS </span> work too? Yes,
        .....definitely more than one way to skin a cat!</p>
</body>
</html>
{% endhighlight %}
<br>
<h3>Underline Example 4.  This example uses <code class="local02">JavaScript functions</code> to underline. The functions are executed when JavaScipt &quot;senses&quot; an action by the cursor - a <code class="local02">mouseover or mouseout or a click</code>. 
</h3>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>Underline Example 4</title>
</head>
<p id="para1" onMouseover="addunderl()" onMouseout="rmvunderl()">
    Put your cursor on me....am I underlined?
        Yes I am&#33; </p>       
<p id="para2" onClick="ulFunc2()">
    Click me....does that underline me too?
        Yes it does&#33; </p>
<p id="para3" onClick="ulFunc3()">
        Click my underline on and off&#33; </p>
<script>
    function addunderl()
    {
        para1.style.textDecoration = "underline"
    }
    function rmvunderl()
    {
        para1.style.textDecoration = "none"
    }
    function ulFunc2() {
    document.getElementById("para2").style.textDecoration = "underline";
    }
    function ulFunc3() {
    document.getElementById("para3");
        if (para3.style.textDecoration === "underline") 
        {
            para3.style.textDecoration = "none";
        } else 
        {
            para3.style.textDecoration = "underline";
        }
    }
    </script>

</body>
</html>
{% endhighlight %}
<br>
A few side notes about the above examples.  In some places, instead of using the keyboard symbol, I used an alternative code representation <code class="local02">Example: “!” is &#33</code>.  Alternative codes are widely used, and are very useful when you want to be certain that a symbol won’t be interpreted by the browser as program code.<br><br>
<span style="font-weight: bold;font-size: large;">Class</span> and <span style="font-weight: bold;font-size: large;">ID</span> appear inside some of the html tags. <code class="local02" >“class=” and “id=”</code>   Class and ID are known as selectors. What is important about class and id is that they allow you to apply some kind of enhancement to selected pieces of code.  In our case, the enhancement of choice was <span style="text-decoration: underline;">underlining</span>.   Enhancements do all kinds of things: add borders and backgrounds; make things change color and size; make things jiggle and shake; insert graphs and charts.  The depth and breadth of the enhancement you want to place into your HTML is vast.  It is what makes web pages the dynamic displays that they are today.<br><br>
Finally, to show code construction, below is a compilation of all the above examples into one. 
<h3>Underline Compilation</h3>
{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>Underline Compilation</title>
    <style>
     .underl {
            text-decoration: underline;
        }
    body {
            width: 55%;
            margin-left: 16px;
            font-family: Verdana, Arial, sans-serif;
        }
    header {
            background-color: deepskyblue;
            padding: 2px 16px;
        }
    li {
            padding: 7px 0px 0px 2px;
            font-weight: 700;
        } 
    .byLine {
            color: white;
            font-style: italic;
        }
    </style>
</head>
<body>
    <header>
        <h1>How Do I Underline Text...Let Me Count The Ways!</h1>
        <p class="byLine">by XZackaly</p>
      </header>
<ol>
<!--  Exercise 1 -->  
    <li>Example One </li>
    <p>Does this do <u>underline</u>&#63; YES - even though 
        &lt;u&gt; is deprecated in HTML5.</p>
    
<!--  Exercise 2 -->

<li>Example Two </li>
    <p><span style="text-decoration: underline;">This line is underlined.
    </span></p>
    
<p style="text-decoration: underline;">This too is underlined.</p>
     <p>And here we underline and italicize
           <em style="text-decoration: underline;"> ONE</em> word.
     </p> 
    
<!--  Exercise 3 -->
<li>Example Three </li>
    <p class="underl">And we can do it THIS way, too.</p>
    <p>Oh, does <span class="underl">THIS </span> work too? 
        Yes.....definitely more than one way to skin a cat!</p>
    
<!--  Exercise 4 -->
<li>Example Four</li>
    <p id="para1" onMouseover="addunderl()" onMouseout="rmvunderl()">
        Put your cursor on me....am I underlined?
            Yes I am&#33; </p>       
    <p id="para2" onClick="ulFunc2()">
        Click me....does that underline me too?
            Yes it does&#33; </p>
    <p id="para3" onClick="ulFunc3()">
            Click my underline on and off&#33; </p>
    
</ol>
<script>
    function addunderl()
    {
        para1.style.textDecoration = "underline"
    }
    function rmvunderl()
    {
        para1.style.textDecoration = "none"
    }
    function ulFunc2() {
    document.getElementById("para2").style.textDecoration = "underline";
    }
    function ulFunc3() {
    document.getElementById("para3");
        if (para3.style.textDecoration === "underline") 
        {
            para3.style.textDecoration = "none";
        } else 
        {
            para3.style.textDecoration = "underline";
        }

    }
</script>

</body>
</html>
{% endhighlight %}
<br>
<style>
    .local02 {
    background-color: wheat;
    } 

</style> 

 