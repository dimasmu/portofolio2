import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'
function App() {
  return (
    <>
      <Particles 
        params={{ 
          particles: {
            number : {
              value : 50,
              density: {
                enable : true,
                area: 900
              }
            },
            "size": {
	            "value": 3
	          },
            "shape": {
              type: "circle",
              stroke:{
                width: 6,
                color: "#f9a00"
              }
            }
          }
        }}
      >

      </Particles>
      <Navbar />
      <Header />
    </>
  );
}

export default App;
