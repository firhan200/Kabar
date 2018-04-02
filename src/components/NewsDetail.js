import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class NewsDetail extends React.Component {
	constructor(props){
		super(props);

		this.state = {'news' : {}, 'newsList' : [], 'loading': true, 'loadingDetail' : true, 'loadArticles' : true};
	}

	componentDidMount() {
    	console.log('load: '+this.props.match.params.title);
    	this.loadDetail(this.props.match.params.title);
  	}

  	componentWillReceiveProps(nextProps){
  		console.log('something updated');
  		this.loadDetail(nextProps.match.params.title);
  		window.scrollTo(0, 0);
  	}

  	loadDetail(title){
  		//set loading to false
      this.setState({'loadingDetail':true});

		fetch('https://newsapi.org/v2/top-headlines?q=tech&apiKey=f97fc0b0f6034f1a9efee4bd4c764910')
    	.then(response => response.json())
      	.then((data) => {
      		if(this.state.loadArticles==true){
      			//get 4 news for side rec
      			this.setState({'newsList' : data.articles});
      			this.setState({'loadArticles':false});

      			this.setState({'loading':false});
      		}
      		

			//get news by title
			if(title=='first'){
				this.setState({ news: data.articles[0] });
			}else{
				for(var i = 0;i < data.articles.length;i++){
					if(data.articles[i].title==title){      		
						this.setState({ news: data.articles[i] });
					}
				}
			}
	      

	      //set loading to false
	      this.setState({'loadingDetail':false});
	    });

	    this.forceUpdate();
  	}

   render() {
      return (    	
         <div id='content' className='container pad' align='left'>
         	{ this.state.loading==true ? <Loading/> : '' }
         	<div hidden={this.state.loading}>
         		<div className='d-block d-sm-none'>
         			{ this.state.loadingDetail==true ? <Loading/> : '' }
     				<div hidden={this.state.loadingDetail}>
         				<h2>{ this.state.news.title }</h2>
			         	<img src={ this.state.news.urlToImage } className='img-fluid' />
			         	<br/>
			         	<br/>
			         	<p align='justify'>{ this.state.news.description }</p>
			         	<b>Author:</b> { this.state.news.author }
			        </div>
         		</div>
         		<div className='row'>
         			<div className='col-sm-4'>
         				{ this.state.newsList.map((data)=>
         					<div className='news-side'>
         						<div className='news-side-label'>
         							{ data.title }
         							<br/>
         							<Link to={ '/news/'+data.title }>Read more</Link>
         						</div>
         						<img src={data.urlToImage} className='img-fluid'/>
         					</div>      					
     					) }
         			</div>
         			<div className='col-sm-8 d-none d-sm-block'>
         				{ this.state.loadingDetail==true ? <Loading/> : '' }
         				<div hidden={this.state.loadingDetail}>
	         				<h2>{ this.state.news.title }</h2>
				         	<img src={ this.state.news.urlToImage } className='img-fluid' />
				         	<br/>
				         	<br/>
				         	<p align='justify'>{ this.state.news.description }</p>
				         	<b>Author:</b> { this.state.news.author }
				        </div>
         			</div>
         		</div>         	
         	</div>
         </div>
      );
   }
}

export default NewsDetail;