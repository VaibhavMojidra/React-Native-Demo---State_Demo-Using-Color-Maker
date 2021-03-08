import React,{useState} from 'react';
import { View,Text } from "react-native";
import ColorAdjustButton from '../components/ColorAdjustButton';

const COLOR_STEP=15;

const ColorMakerScreen =()=>{
    const [Red, setRed] = useState(0);
    const [Green, setGreen] = useState(0);
    const [Blue, setBlue] = useState(0);
    const setColor=(color,change)=>{
        switch(color){
            case 'red':
                (Red+change>255||Red+change<0)?null:setRed(Red+change);
            return;
            case 'green':
                (Green+change>255||Green+change<0)?null:setGreen(Green+change);
            return;
            case 'blue':
                (Blue+change>255||Blue+change<0)?null:setBlue(Blue+change);
            return;
        } 
    };


    return(<View>
        <ColorAdjustButton onIncrement={()=>setColor('red',COLOR_STEP)} onDecrease={()=>setColor('red',-1*COLOR_STEP)} colorName="Red"/>
        <ColorAdjustButton onIncrement={()=>setColor('blue',COLOR_STEP)} onDecrease={()=>setColor('blue',-1*COLOR_STEP)} colorName="Blue"/>
        <ColorAdjustButton onIncrement={()=>setColor('green',COLOR_STEP)} onDecrease={()=>setColor('green',-1*COLOR_STEP)} colorName="Green"/>
        <View style={{height:200,width:200,backgroundColor:`rgb(${Red},${Green},${Blue})`}}/>
    </View>);
};


export default ColorMakerScreen;
