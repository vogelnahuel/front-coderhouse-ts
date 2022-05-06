import { Form, Formik } from "formik";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Nav } from "../../components/nav/nav";
import { MessageTypes } from "./messageTypes";
import './message.scss'

export const Message: React.FC<MessageTypes> = ({
  isFetching,
  messages,
  socket,
  user
}): JSX.Element => {

  return (
    <>
      <Header/>
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container display-container">
          <h2 className="title_Dashboard_Admin">
            Messages
          </h2>
          <h3 className="subtitle_Dashboard_Admin">
            cree un mensage y vea los anteriores!
          </h3>
          <section className="section-container-form-create">
          <Formik
            enableReinitialize 
            initialValues={{
              message:  '' ,
              email: user?.User?.email || '',
              name:  user?.User?.name || '',
            }}
            onSubmit={(values) => {
             socket.emit('getMenssage',values)
            }}
          >
            {(formik) => (
              <Form className="create-form" onSubmit={formik.handleSubmit}>
                <Input label="message" name="message" id="message" />
                <Input label="email" name="email" id="email" readOnly />
                <Input label="name" name="name" id="name" readOnly/>
                <div>
                    <button className="login-button">Crear</button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
        <section className="section-container-form-create">
              {
               messages && messages.length>0 ? messages.map((element:any) => 
                <div key={element._id} className="message-container">
                    <p>{element.email}</p>
                    <p>{element.name}</p>
                    <p>{element.message}</p>
                </div>    
                )
                :null
           
              }
        </section>
          
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
    </>
  );
};
