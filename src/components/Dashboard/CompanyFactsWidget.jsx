import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../Project.css';

const data = [
  { year: 2016, Paris: 50, Bangkok: 130, SanFrancisco: 20 },
  { year: 2017, Paris: 100, Bangkok: 120, SanFrancisco: 40 },
  { year: 2018, Paris: 170, Bangkok: 110, SanFrancisco: 80 },
  { year: 2019, Paris: 250, Bangkok: 130, SanFrancisco: 140 },
];

const CompanyFactsWidget = () => (
  <div style={{ width: '100%', height: 250, background: 'white', padding: 20 }}>
    <h3>Company Facts</h3>
    <p style={{ color: '#888' }}>Employees</p>
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data} margin={{ top: 10, right: 40, left: 0, bottom: 0,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}  />
        <Bar dataKey="Paris" fill="#f59e42" />
        <Bar dataKey="Bangkok" fill="#3ea091" />
        <Bar dataKey="SanFrancisco" fill="#8557d6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CompanyFactsWidget;
