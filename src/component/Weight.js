import Button from 'react-bootstrap/Button';

import earth from '../Sketch/earth.jpg';
import jupiter from '../Sketch/Jupiter.jpg';
import mars from '../Sketch/mars.jpg';
import mercury from '../Sketch/mercury.png';
import neptune from '../Sketch/neptune.jpg';
import saturn from '../Sketch/saturn.jpg';
import uranus from '../Sketch/uranus.jpg';
import venus from '../Sketch/venus.jpg';
import { useState } from 'react';

export default function Weight() {

    const [jupiterw, setjupiterw] = useState("0");
    const [marsw, setmarsw] = useState("0");
    const [mercuryw, setmercuryw] = useState("0");
    const [neptunew, setneptunew] = useState("0");
    const [saturnw, setsaturnw] = useState("0");
    const [uranusw, seturanusw] = useState("0");
    const [venusw, setvenusw] = useState("0");

    function handleonclick(){
         let val =document.getElementById('input').value;
         let weight = parseFloat(val);

         //jupiter Weight
           let value=(weight*2.34).toFixed(2);
           setjupiterw(value);

        //mars weight
         value =(weight*0.38).toFixed(2);
         setmarsw(value);

        //mercury weight
        value=(weight*0.38).toFixed(2);
        setmercuryw(value);

        //neptune weight
        value=(weight*1.19).toFixed(2);
        setneptunew(value);

        //saturn weight
        value=(weight*1.06).toFixed(2);
        setsaturnw(value);

        //uranus weight
        value=(weight*0.92).toFixed(2);
        seturanusw(value);

        //venus weight
        value=(weight*0.91).toFixed(2);
        setvenusw(value);
    }

    return (
        <div className='body'>
            <nav className='nav'>
                <h1 style={{fontFamily:'fantasy'}}>Planet Weight Evaluator</h1>
            </nav> 

            <div className='earth-and-planets'>
                <div className='earth'>
                    <h4>Earth</h4>
                    <img src={earth} alt="Earth" />
                    <p>Enter Your Weight</p>
                    <input id='input' type="text" placeholder='Enter weight in KG'  autoComplete='off'/><br />
                    <Button className='mt-3' variant="primary" onClick={handleonclick}>Test Weight</Button>
                </div>

                <div className='main'>
                    <div className='planet'>
                        <div className='con-img'>
                            <div className='plante-img'>
                                <h4>Jupiter</h4>
                                <img src={jupiter} alt="" />
                                <p>weight={jupiterw} kg</p>
                            </div>
                            <div className='plante-img'>
                                <h4>Mars</h4>
                                <img src={mars} alt="" />
                                <p>weight={marsw} kg</p>
                            </div>
                            <div className='plante-img'>
                                <h4>Mercury</h4>
                                <img src={mercury} alt="" />
                                <p>weight={mercuryw} kg</p>
                            </div>
                            <div className='plante-img'>
                                <h4>Neptune</h4>
                                <img src={neptune} alt="" />
                                <p>weight={neptunew} kg</p>
                            </div>
                        </div>
                        <div className='con-img'>
                            <div className='plante-img'>
                                <h4>Saturn</h4>
                                <img src={saturn} alt="" />
                                <p>weight={saturnw} kg</p>
                            </div>
                            <div className='plante-img'>
                                <h4>Uranus</h4>
                                <img src={uranus} alt="" />
                                <p>Weight={uranusw} kg</p>
                            </div>
                            <div className='plante-img'>
                                <h4>Venus</h4>
                                <img src={venus} alt="" />
                                <p>weight={venusw} kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
