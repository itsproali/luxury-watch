import React from "react";

const Blog = () => {
  return (
    <div className="mx-4 md:mx-16 py-4">
      <h1 className="font-bold text-pink-600 text-4xl text-center my-3">
        Popular Blogs
      </h1>
      <div className="blogs grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="shadow-lg p-4 bg-white rounded-md">
          <h1 className="font-semibold text-3xl mb-3">What is Context API?</h1>
          <p className="text-xl">
            Context API is a method of data passing in react. We can pass data
            to children using props. Props can pass one level. On the other
            hand, context API can pass data to any children without passing it
            to another component.
          </p>
          <p className="text-slate-500 mt-3">
            <small>Posted on 04-Apr-2022 --- Mohammad Ali</small>
          </p>
        </div>

        <div className="shadow-lg p-4 bg-white rounded-md">
          <h1 className="font-semibold text-3xl mb-3">What is Semantic Tag?</h1>
          <p className="text-xl">
            A semantic tag is a meaningful tag in HTML. Semantic Tag carries the
            content information under the tag. For Example "<code>nav</code>" is
            used for Navbar. Semantic Tag helps the browser to understand the
            content of tag information. It's also very helpful for SEO.
          </p>
          <p className="text-slate-500 mt-3">
            <small>Posted on 04-Apr-2022 --- Mohammad Ali</small>
          </p>
        </div>

        <div className="shadow-lg p-4 bg-white rounded-md">
          <h1 className="font-semibold text-3xl mb-3">
            Difference between inline, inline-block & Block Element?
          </h1>
          <p className="text-xl">
            Block Element grab all the space of a line. Inline Element grabs
            just content space. But in the inline element, we can't set height,
            width, margin, padding etc. But sometimes we need to use these. By
            converting into an inline-block element these problems can be fixed
            easily. An inline-block element is still an inline element but
            behaves like a block element.
          </p>
          <p className="text-slate-500 mt-3">
            <small>Posted on 04-Apr-2022 --- Mohammad Ali</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
