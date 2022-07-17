const Tweeter = function () {
  let postIdCounter = 2;
  let commentIdCounter = 6;
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const getPosts = () => _posts;
  const addPost = function (txt) {
    const obj = {};
    obj.text = txt;
    postIdCounter += 1;
    obj.id = "p" + postIdCounter;
    obj.comments = [];
    _posts.push(obj);
  };
  const addComment = function (coment_txt, idpost) {
    comn = [];
    const comentobj = {};
    commentIdCounter += 1;
    comentobj.id = "c" + commentIdCounter;
    comentobj.text = coment_txt;
    // comn.push(comentobj);
    for (element of _posts) {
      if (element.id == idpost) {
        element.comments.push(comentobj);
      }
    }
  };

  const removePost = function (id_post) {
    for (var i = 0; i < _posts.length; i++) {
      if (_posts[i].id === id_post) {
        _posts.splice(i, 1);
        i--;
      }
    }
    // for (element of _posts) {
    //   if (element.id == id_post) {
    //     id_post = parseInt(id_post);
    //     _posts.splice(element, id_post);
    //   }
    // }
  };

  const removeComent = function (id_post, coment_id) {
    for (var i = 0; i < _posts.length; i++) {
      if (_posts[i].id === id_post) {
        for (var j = 0; j < _posts[i].comments.length; j++)
          if (_posts[i].comments[j].id === coment_id) {
            _posts[i].comments.splice(j, 1);
            j--;
          }
      }
    }
  };
  return {
    getPosts: getPosts,
    addPost: addPost,
    removePost: removePost,
    removeComent: removeComent,
    addComment: addComment,
  };
};
const tweeter1 = Tweeter();
tweeter1.addPost("This is my own post!");
console.log(tweeter1.getPosts());
tweeter1.addComment("Damn straight it is!", "p3");
tweeter1.addComment("Second the best!", "p2");
console.log(tweeter1.getPosts());
tweeter1.removePost("p1");
console.log(tweeter1.getPosts());

tweeter1.removeComent("p2", "c6");
console.log(tweeter1.getPosts());
