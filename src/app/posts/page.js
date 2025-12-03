export default function Posts() {
  const posts = [
    {
      title: "Solving Authentication Challenges in a Production App",
      date: "2023-02-12",
      link: "https://medium.com/@hackinfo21/from-expo-auth-to-firebase-solving-authentication-challenges-in-a-production-app-97d9b86dcdfe",
    },
    {
      title: "Connecting Multiple Database in NodeJs with MongoDB",
      date: "2023-02-12",
      link: "https://gist.github.com/hackinf0/4f97a6a7e820cb612e0ff5c39139d08f",
    },
    {
      title: "COMMENT PROGRESSER EN ETHICAL HACKING",
      date: "2022-10-24",
      link: "https://youtu.be/UeATOqQyN9I?si=ZP3W9KnDSMoPTXIW",
    },

    {
      title: "COMMENT DEVENIR UN HACKER ",
      date: "2022-05-14",
      link: "https://youtu.be/cbgD7_xIdvM?si=-7E_RNc0XPIOdZcF",
    },
    { title: "J’ai enquêté sur une attaque WordPress discrète",
      date : "2025-12-03",
      link:"https://medium.com/@hackinfo21/from-frontend-clues-to-backend-backdoors-a-deep-dive-into-a-wordpress-infection-b9c1ac630426"
    }
  ]

  return (
    <div className="bg-gray-900 min-h-screen">
      <main className="max-w-2xl mx-auto px-6 py-12 text-white"> 
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
 
        <p className="text-gray-400 mb-8 leading-relaxed">
          I don’t write often, but I regularly share my insights through videos.
          I’ve also explored other content formats, including text and graphics.
        </p>
 
        <ul className="space-y-3">
          {posts.map((post, index) => (
            <li key={index}>
              <a href={post.link} className="flex items-center space-x-2 group"> 
                <span className="text-gray-400 group-hover:text-yellow-500">
                  ▪
                </span>
 
                <span className="group-hover:text-yellow-500 group-hover:underline transition">
                  {post.title}
                </span>

                <span className="text-gray-500 text-sm">({post.date})</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
