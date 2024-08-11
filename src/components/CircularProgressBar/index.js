import React from 'react';
import {View} from 'react-native';
import {Svg, Text, Circle} from 'react-native-svg';

const CircularProgressBar = ({
  progress,
  radius,
  strokeWidth,
  color,
  textStyle,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;
  const remainingMinutes = Math.floor((100 - progress) * 60 / 100);
  const remainingHours = Math.floor(remainingMinutes / 60);
  const formattedTime = `${remainingHours}:${remainingMinutes % 60}`;


  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
        />
        <Text
          x={radius}
          y={radius}
          textAnchor="middle"
          alignmentBaseline="central"
          style={textStyle}>
          {`${formattedTime}`}
        </Text>
      </Svg>
    </View>
  );
};

export default CircularProgressBar;
