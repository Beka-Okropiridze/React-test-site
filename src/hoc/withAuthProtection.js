//hoc- რეაქტისეული ფილოსოფია და შეგვიძლია გამოვიყენოთ დეკორატორ ფათერნად ქვევით მოცემული ლოგიკის მსგავსად სხვა პარალელების გავლებაც შეიძლება
//hoc იგივე hired order component-ი არის  კომპონენტი რომელიც პარამეტრად იღებს მეორე კომპონენტს ანუ რისი გახვევაც გვინდა რაღაცა ლოგიკაში
// და აბრუნებს სხვა კომპონენტს რომელშიც უკვე არის ეს კომპონენტი მოთავსებული მაგრამ ამ დაბრუნებულ კომპონენტში მე შემიძლია რაღაც რეაქტის 
// ლოგიკა მეწეროს
import { useRequireAuth } from "../components/hooks";
import { Loader } from "../atoms";


export const withAuthProtection = (WrappedComponent) => {
    const AuthProtection = (props) => {
        const auth = useRequireAuth();

        if (!auth) {
            return <Loader />
        }

        return <WrappedComponent {...props} />
    }

    AuthProtection.displayName= 'AuthProtection';

    return AuthProtection;
}