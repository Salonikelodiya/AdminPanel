import React from 'react';
import {
  PieChart, Pie, Cell, Legend, ResponsiveContainer,Label
} from 'recharts';
import '../Project.css';

const data = [
  { name: 'KFC', value: 8 },
  { name: 'FIAT-Chrysler LLC', value: 8 },
  { name: 'KLM', value: 12 },
  { name: 'Aeroflot', value: 10 },
  { name: 'Lukoil', value: 10 },
  { name: 'American Express', value: 10 },
  { name: 'Daimler', value: 10 },
];

const COLORS = [
  '#f25c5c',   // KFC (red)
  '#e0ab1b',   // FIAT-Chrysler LLC (yellow)
  '#8a4368',   // KLM (maroon)
  '#1ba1b2',   // Aeroflot (teal)
  '#3186d9',   // Lukoil (blue)
  '#b16ddd',   // American Express (purple)
  '#47c35c',   // Daimler (green)
];

const StatisticsWidget = () => (
  <div style={{
    width: '100%',
    height: 250,
    background: 'white',
    
    padding: '20px'
  }}>
    <h3>Statistics</h3>
    <ResponsiveContainer width="80%" height="80%">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={65}
          paddingAngle={0.5}
          label={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
          {/* <Label
    value="Projects by account"
    position="center"
    style={{ position: 'absolute',
      top: '50%',
      left: '50%',
      
      pointerEvents: 'none',
      fontWeight: 'bold',
      fontSize: 12,
      color: '#000',

     whiteSpace: 'normal ', // Allow wrapping
      textAlign: 'center',
      maxWidth: '80%',                // Constrain width of text box
      userSelect: 'none',
      lineHeight: 1.3, }}
  /> */}
        </Pie>

        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default StatisticsWidget;
