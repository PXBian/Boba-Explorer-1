import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Divider, Item, Icon, Header, Image, List, Label, Rating} from 'semantic-ui-react';

import {server_addr} from '../../const';

function StorePage() {
    const [store, setStore] = useState({});
    const [yelp_reviews, setYelpReviews] = useState({});
    const { store_id } = useParams();

    useEffect(() => {
        fetch(server_addr+'/store/'+store_id)
        .then(res => res.json())
        .then((res) => {
            res.store && setStore(res.store);
            res.yelp_reviews && setYelpReviews(res.yelp_reviews);
        })
        .catch(console.log)
    }, [store_id]);

    const yelp_reviews_display = []
    for (let user of Object.keys(yelp_reviews)) {
        yelp_reviews_display.push(yelp_reviews[user].map((review,idx)=>(
            <Item key={user+idx.toString()}>
                <Item.Image size='small'><Icon name='user'>{"Yelp User " + user}</Icon></Item.Image>

                <Item.Content verticalAlign='middle'>
                    <Item.Header><Rating defaultRating={review.Rating} maxRating={5} disabled /></Item.Header>
                    <Item.Meta>{review['Date']}</Item.Meta>
                    <Item.Description>
                        {review.Review ? review.Review : 'Unknown Review'}
                    </Item.Description>
                </Item.Content>
            </Item>
        )))
    }

    return (
        <>
            <Image src={store.store_cover_url} size='medium' centered={true} bordered={true} rounded={true} />
            <Header as={'h2'} block={true} color='green'> {store.store_name}</Header>
            <List divided selection>
                <List.Item>
                  <Label color='blue' horizontal>
                    Open Time
                  </Label>
                    {store.operation_time}
                </List.Item>
                <List.Item>
                  <Label color='pink' horizontal>
                    Address
                  </Label>
                  {store.location}
                </List.Item>
            </List>

            <Divider horizontal section>
                <Header as='h4'>
                    <Icon name='comment alternate outline' />
                    Review
                </Header>
            </Divider>

            <Item.Group divided style={{ maxWidth: 600, margin: '1.5em auto' }}>
                {yelp_reviews_display}
            </Item.Group>
        </>
    );
}

export default StorePage;