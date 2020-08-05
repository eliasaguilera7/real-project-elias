import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Index = function ({user}) {

  const [resources, setResources] = useState([]);


  useEffect(() => {
    (async () => {
      await getResources();
    })();
  }, []);

  const getResources = async () => {
    const resourcesResp = await Axios.get('/api/resources');
    if (resourcesResp.status === 200) setResources(resourcesResp.data);
  };

  const deleteResource = async resource => {
    try {
      const resp = await Axios.post('/api/resources/delete', {
        id: resource._id
      });

      if (resp.status === 200) toast("Your appointment was created sucessfuly", {type: toast.TYPE.SUCCESS});

      await getResources();
    } catch (error) {
      toast("There was an error setting your appointment", {type: toast.TYPE.ERROR});
    }
  };

  return (
    <Container className="my-5">
      <header>
        <h1>Your Appointments</h1>
      </header>

      <hr/>

      <div className="content">
        {resources && resources.map((resource, i) => (
          <div key={i} className="card my-3">
            <div className="card-header clearfix">
              <div className="float-left">
                <h5 className="card-title">
                  {resource.title}
                </h5>

                {resource.user ? (
                  <small>~{resource.user.fullname}</small>
                ) : null}
              </div>
                  
              <div className="float-right">
                <small>{resource.updatedAt}</small>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">
                {resource.synopsis}
              </p>
            </div>

            {user ? (
              <div className="card-footer">
                <Link to={{
                  pathname: "/resources/edit",
                  state: {
                    id: resource._id
                  }
                }}>
                  <i className="fa fa-edit"></i>
                </Link>

                <button type="button" onClick={() => deleteResource(resource)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Container>
  );

};

export default Index;