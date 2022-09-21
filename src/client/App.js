import React, { useState } from 'react';
import '../../assets/style.css';


const initialPosts = [

    {

        id: 2,

        text: 'Lorem ipsum',

        user: {

        avatar: './public/avatar1.png',

        username: 'Test User'

        }

    },

    {

        id: 1,

        text: 'Lorem ipsum',

        user: {

        avatar: './public/avatar2.png',

        username: 'Test User 2'

        }

    }

];





const App = () => {

    const [posts, setPosts] = useState(initialPosts);

    return (
    
      <div className="container">
    
        <div className="feed">
    
          { initialPosts.map((post, i) =>
    
            <div key={post.id} className="post">
    
              <div className="header">
    
                <img src={post.user.avatar} />
    
                <h2>{post.user.username}</h2>
    
              </div>
    
              <p className="content">
    
                {post.text}
    
              </p>
    
            </div>
    
          )}
    
        </div>
    
      </div>
    
    )

}

export default App
