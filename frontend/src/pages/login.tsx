import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    alert();
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:'400px',margin:'50px auto'}}>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',margin:'10px 0',padding:'8px'}} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} style={{width:'100%',margin:'10px 0',padding:'8px'}} />
      <button type="submit" style={{width:'100%',padding:'10px',marginTop:'10px'}}>Login</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
}
