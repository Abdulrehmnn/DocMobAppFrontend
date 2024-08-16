import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {View, Text} from 'react-native';
// import { useRoute } from '@react-navigation/native';
export default function SendChat() {
//   const route  = useRoute();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);


    //const subscriber = firestore().collection("chats").doc(route.params.id+route.params.data.userId).collection('messages').orderBy("createdAt","desc");
    subscriber.onSnapshot(querysnapshot =>{
        const allMessages = querysnapshot.map(item=>{
            return{ ...item._data, createdAt : Date.parse(new Date())};
        });
        setMessages(allMessages);
    });
    return () => subscriber();
  }, []);

  const onSend = useCallback((messages = []) => {
    const msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: route.params.id,
      sendTo: route.params.data.userId,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    // firestore().collection("chats").doc(""+route.params.id+route.params.data.userId).collection('messages').add(myMsg)
    // firestore().collection("chats").doc(""+route.params.data.userId+route.params.id).collection('messages').add(myMsg)
  }, []);

  return (
    <View style = {{flex :1}}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        // _id : route.params.id,

        }}
      />
    </View>
  );
}
