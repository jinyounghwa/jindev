(function (root,factory){
  if (typeof define === 'function' && define.amd){
    define([
      "react",
      "jsx!components/views/loginpage"
    ],factory)
  }else{
    root.App = factory(root.React);
  }
})(this, function (React){

  return  React.createClass({
    render: function () {
      return(
      <div> test </div>
      )
    }
  })
})
