"use client"

import { use } from "react";

const singlePost = (props) => {
    const user = use(props.params)
    return <h1>{user.usernames}</h1>
};

export default singlePost;
