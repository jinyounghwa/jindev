(function (root,factory){
  if (typeof define === 'function' && define.amd){
    define([
      "react"
    ],factory)
  }else{
    root.loginpage = factory(root.React);
  }
})(this, function (React,Loginpage){

  return  React.createClass({
    render: function () {
      return(
      <div>loginpage</div>

      )
    }
  })
})
