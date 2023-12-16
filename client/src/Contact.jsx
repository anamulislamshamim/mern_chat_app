import Avatar from "./Avatar.jsx";

export default function Contact({id,username,onClick,selected,online}) {
  return (
    <div key={id} onClick={() => onClick(id)}
         className={"border-b border-gray-100 flex items-center gap-2 cursor-pointer " + (selected ? 'bg-yellow-100 border-l-4 border-l-blue-500' : '')}>
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800">{username.charAt(0).toUpperCase() + username.slice(1)}</span>
      </div>
    </div>
  );
}