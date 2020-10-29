import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.component';
import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.component';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop' component={Shop} />
				<Route path='/sign-in' component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default App;
