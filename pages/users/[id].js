import {useRouter} from 'next/router'
import fetch from "isomorphic-fetch";
import Container from '../../components/container';

const User=(props)=>{
  console.log(props)
  const router=useRouter();
  const obj=router.query;
  console.log(obj)

  return (
    <Container>
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="car-header text-center">
            <img src={props.user.avatar} alt="" style={{borderRadius:'50%'}} />
          </div>
          <div className="card-body text-center">
            <h3>
              {props.user.id} . {props.user.first_name} {props.user.last_name}
            </h3>
            <p>Email: {props.user.email}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

User.getInitialProps =async (ctx)=>{
  const res= await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON =await res.json();
  return {user:resJSON.data}
}

export default User;