(function (root,factory){
  if (typeof define === 'function' && define.amd){
    define([
      "react"
    ],factory)
  }else{
    root.App = factory(root.React);
  }
})(this, function (React, LoginPage){

  return  React.createClass({
    render: function () {
      return(
      <div>
      </div>
      )
    }
  })
})
