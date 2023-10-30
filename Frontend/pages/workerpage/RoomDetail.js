import React , { useRef } from 'react';
import { StyleSheet, Button } from 'react-native';
import Swiper from 'react-native-swiper';

import Room from "./components/Room.js";

export default function RoomDetail({ route }) {
  const { data, index, onPeopleCountChange, handleSubmit } = route.params;
	const swiperRef = useRef(null);

  const handleCountChange = (roomId, newCount) => {
    onPeopleCountChange(roomId, newCount);
  };

  return (
    <Swiper 
			ref={swiperRef}
			style={styles.container} 
			showsButtons={true} 
			loop={false}
			bounces={true}
			index={index-1}
		>
      {data.map((item) => (
				<Room key={item.id} item={item} handleCountChange={handleCountChange} />
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Having this makes it so we cant swipe
  },
});
