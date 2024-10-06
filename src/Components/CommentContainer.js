import React from 'react'
//WITH NESTED COMMENT FEATURE....
//Bebouoncing for search for  optimizing our youtube by caching...
//How do we optimize the API calls...

const commentsData = [
 {
  name: 'name2',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  replies: []
 },
 {
  name: 'ali',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  replies: [{
   name: 'alu',
   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
   replies: [{
    name: 'ali',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    replies: []
   }]

  }]
 },
 {
  name: 'name2',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  replies: [
   {
    name: 'name2',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    replies: [
     {
      name: 'name2',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      replies: [
       {
        name: 'name2',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        replies: [
         {
          name: 'name2',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          replies: []
         },
        ]
       },
      ]
     },

    ]
   },
  ]
 },
 {
  name: 'name2',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  replies: []
 },
 {
  name: 'name2',
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  replies: [
   {
    name: 'name2',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    replies: [
     {
      name: 'name2',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      replies: []
     },
    ]
   },
  ]
 },
]

const Comment = ({ comment }) => {

 const { name, text } = comment;
 return (
  <div className='flex p-2 shadow-sm rounded-lg'>

   <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt='user'
    className='h-12' />
   <div className='px-3 bg-slate-200'>
    <h1 className='font-semibold'>{name}:</h1>
    <h1>{text}</h1>
   </div>

  </div>
 )

}

const CommentList = ({ comments }) => {
 return comments.map((comment, index) => {
  return (
   <div key={index}>
    <Comment comment={comment} />
    <div className='ml-5 border-l-2'>
     <CommentList comments={comment.replies} />
    </div>
   </div>
  )
 })
}

const CommentContainer = () => {
 return (
  <div className='mt-5 '>
   <CommentList comments={commentsData} />

  </div>
 )
}

export default CommentContainer