import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detail from './components/Detail'

function App() {
	return <div className='App'>
		<Router>
			<Header />
			<Switch>
				<Route path='/detail'>
					<Detail />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Router>
	</div>
}

export default App
