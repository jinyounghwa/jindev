(function (root,factory){
  if (typeof define === 'function' && define.amd){
    define([
      "react",
      "jsx!components/views/Loginpage"
    ],factory)
  }else{
    root.App = factory(root.React, root.Loginpage);
  }
})(this, function (React, Loginpage){

  return  React.createClass({
    render: function () {
      return(
      <div>
        <loginpage/>
      </div>
      )
    }
  })
})
