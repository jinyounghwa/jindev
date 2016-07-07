(function (root,factory){
  if (typeof define === 'function' && define.amd){
    define([
      "react"
    ],factory)
  }else{
    root.LoginPage = factory(root.React);
  }
})(this, function (React){

  return  React.createClass({
    render: function () {
      return(
<div>
  
</div>
      )
    }
  })
})
