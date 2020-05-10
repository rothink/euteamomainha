import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import img6 from './assets/img6.jpeg';
import img7 from './assets/img7.jpeg';
import img8 from './assets/img8.jpeg';
import img9 from './assets/img9.jpeg';
import img11 from './assets/img11.jpeg';
import img13 from './assets/img13.jpeg';
import img16 from './assets/img16.jpeg';
import img12 from './assets/img12.jpeg';
import img19 from './assets/img19.jpg';
import img17 from './assets/img17.jpg';
import img14 from './assets/img14.jpeg';
import img15 from './assets/img15.jpeg';
import img18 from './assets/img18.jpg';
import img20 from './assets/img20.jpg';
import img21 from './assets/img21.jpeg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Olá, Claudinha',
          url: img11,
        },
        {
          title: 'Feliz dia das mães',
          url: img3,
        },
        {
          title: 'Obrigado por ser essa mamãe ..',
          url: img2,
        },
        {
          title: 'Alegre ..',
          url: img16,
        },
        {
          title: 'Engraçada ..',
          url: img8,
        },
        {
          title: 'Super mamãe ..',
          url: img5,
        },
        {
          title: 'Super vovó ..',
          url: img9,
        },
        {
          title: '.. A vovó mais linda!',
          url: img1,
        },
        {
          title: 'Super filha ..',
          url: img7,
        },
        {
          title: '.. De dar orgulho a todos os pais ..',
          url: img13,
        },
        {
          title: 'Obrigado por nunca desistir da gente',
          url: img12,
        },
        {
          title: 'Obrigado por todo carinho',
          url: img19,
        },
        {
          title: 'Obrigado por ser a melhor prima',
          url: img14,
        },
        {
          title: 'Por ser a melhor tia',
          url: img17,
        },
        {
          title: 'Por ser a melhor filha',
          url: img15,
        },
        {
          title: 'Obrigado por ser...',
          url: img20,
        },
        {
          title: '... Tudo pra mim',
          url: img18,
        },
        {
          title: '... Amamos você',
          url: img21,
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          width: 350,
          height: 600,
        }}>
        <ImageBackground
          source={item.url}
          style={{width: '100%', height: '91%'}}
        />
        <Text style={{fontSize: 30}}>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 20}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={350}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
