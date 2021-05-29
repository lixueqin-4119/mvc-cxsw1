import $ from 'jquery'
import './app3.css'

const html=`
   <section id="app3">
      <div class="square"></div>
    </section>
`
const $element=$(html).appendTo($('body > .page'))

const $square = $('#app3 .square')
//三个值 yes no undefined;默认是undefined，如果改了呢就是yes
//有结果yes,无结果undefined no.只要排除yes剩下的就是undefined和no
//有结果yes就是true，无结果undefined和no就是false
const localKey='app3.active'
const active=localStorage.getItem(localKey) ==='yes'
//等价于const active=localStorage.getItem(localKey) ==='yes' ? true:false

$square.toggleClass('active',active)
//等价于上面的
if(active){
$square.addClass('active')//把当前状态加到square
}else{
$square.removeClass('active')
}

$square.on('click', ()=>{
  if($square.hasClass('active')){
    $square.removeClass('active')
    localStorage.setItem(localKey,'no')
    //setItem只支持字符串string,到时候取出来的值为'false';你这时候给个bool值false它会自动转化为字符串false也就是'false'
    //或者直接改成'no'(yes是点击no是回去)
  }else{
    $square.addClass('active')
    localStorage.setItem(localKey,'yes')
  }
  // $square.toggleClass('active')
})