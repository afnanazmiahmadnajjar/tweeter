const render = function (_posts) {
  const renderPosts = function (_posts) {
    for (let post of _posts) {
      console.log(post);
      let postBox = $(
        `<div class='post-box'   data-id=${post.id}>
    
      <p class=name>
        ${post.text}
         </p>
       
          <div>`
      );
      $("#posts").append(postBox);

      for (let comment of post.comments) {
        let postComment =
          $(`<div class='post-comment '   data-id=${comment.id} >
        
           <p class=commentName>
             ${comment.text}</p>
         <div>`);
        $("#posts").append(postComment);
      }
    }
  };

  return {
    renderPosts: renderPosts,
  };
};
// let postComment = $(
//   `<div class='post-comment ' >
// data-id=${comment.id}
// <p class=name>
//   ${comment.text}
//    </p>
//  <div>`
// );
// </p>
// <p class=text>
// ${post.comments}
// </p>
