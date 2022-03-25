import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import { 
        Container,
        Scroller,
        
        HeaderArea,
        HeaderTitle,
        SearchButton,

        LocationArea,
        LocationInput,
        LocationFinder,

} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
        const navigation = useNavigation();

        const [locationText, setLocationText] = useState('');
        const [coords, setCoods] = useState(null);

        const handleLocationFinder = () => {
                setCoods(null);

        }

        return (
                <Container>
                        <Scroller>

                                <HeaderArea>
                                        <HeaderTitle numberOfLines={2}>Procure um treinador perto de você</HeaderTitle>
                                        <SearchButton onPress={()=>navigation.navigate('Search')}>
                                                <SearchIcon width="26" height="26" fill="#FFFFFF" />
                                        </SearchButton>
                                </HeaderArea>

                                <LocationArea>
                                        <LocationInput
                                                placeholder="Qual a sua localização?"
                                                placeholderTextColor="#FFFFFF"
                                                value={locationText}
                                                onChangeText={t=>setLocationText(t)}
                                        />
                                        <LocationFinder onPress={handleLocationFinder}>
                                                <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
                                        </LocationFinder>
                                </LocationArea>




                        </Scroller>
                </Container>
        );
}