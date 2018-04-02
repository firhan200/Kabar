import React from 'react';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

//news api :f97fc0b0f6034f1a9efee4bd4c764910

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {'news' : [], 'loading':true};
  }

  componentDidMount() {
    this.NewsList();
  }

  NewsList() {
    fetch('https://newsapi.org/v2/top-headlines?q=tech&apiKey=f97fc0b0f6034f1a9efee4bd4c764910')
    .then(response => response.json())
      .then((data) => {
        this.setState({ news: data.articles });
        this.setState({ loading: false })
      });
  }

  FormatDate(date){
  	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];

  	var date = new Date(date);
  	var month = parseInt(date.getMonth());
  	return date.getDate()+" "+monthNames[month]+" "+date.getFullYear();
  }

  SetImageSize(){
  	console.log('a');
  }

   render() {
      return (
         <div className='container pad'>
          { this.state.loading==true ? <Loading/> : '' }
         	<div className='row' hidden={this.state.loading}>
         	{ this.state.news.map( (data) =>  
         		<div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 news-box' align='left'>
         		  <Card>
         		  	<div className='news-date'>
         		  		{ this.FormatDate(data.publishedAt) }
         		  	</div>
         		  	<div className='news-img-frame'>
         		  		<CardImg top width="100%" src={ data.urlToImage } alt="{}" />
         		  	</div>			        
			        <CardBody>
			          <CardTitle>{ data.title.length > 50 ? data.title.slice(0,50)+'...' : data.title }</CardTitle>
			          <CardText>{  data.description!=null ? (data.description.length > 250 ? data.description.slice(0,250)+'...' : data.description) : '' }</CardText>
			          <div className='news-author'><b>author</b>: { data.author }</div>
			          <Link to={ '/news/'+data.title }><Button color='primary' size='sm'>Read more</Button></Link>
			        </CardBody>
			      </Card>
            	</div>
         	) }           
         	</div>
         </div>
      );
   }
}

export default News;