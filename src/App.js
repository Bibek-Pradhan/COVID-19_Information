import React from 'react';

// this is too long process
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// instead of long process
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImg from './images/covid.png';

class App extends React.Component {
    state = {
        data: {},
        country: "",
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return ( 
        <div className = { styles.container } >
            <img className={styles.image} src={coronaImg} alt="CORONA VIRUS" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;
