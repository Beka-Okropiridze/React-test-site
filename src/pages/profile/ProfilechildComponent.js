// ეს მაგალითი არის რეაქტის ოპტიმიზაცია და არა აუცილებელი ნაწილი, ამის გამოყენებით შეიძლება ცუდი შედეგი დააყენო ამიტომ ამის გამოყენება
// აუცილებლად ჭკვიანურად ნაფიქრად ხდება. 
// memo აჩერებს გადახატვას მემოს გარეშე დაექსპორტებული ყოველი ასოს ინფუთში ჩაწერისას აამუშავებს ამ fs style-ს.

import { memo } from "react";

const ProfilechildComponent = ({ params, onClick }) => {
    console.log('--Child-Component-rendering', params);
    return(
        <h4 style={{
            color: params.color 
        }}>
            Child component</h4>
    )
};

export default memo(ProfilechildComponent);