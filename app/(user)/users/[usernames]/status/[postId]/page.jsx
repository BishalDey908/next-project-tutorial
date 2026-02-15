const singlePost = async (props) => {
    
    const user = await props.params
    
    console.log(user)
    return <h1>{user.postId}</h1>
};

export default singlePost;
