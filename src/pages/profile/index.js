//Profile კომპონენტი უნდა მოვრთათ withAuthProtection კომპონენტით
//რადგან Profile-ის ექსპორტი გვინდა როგორც withAuthProtection-ის ფროფსი ამიტომ აქ ვაიმპორტებთ ორივე კომპონენტს და ვწერთ ესეთ
// იმპორტ-ექსპორტს როგორიც ქვემოთაა.

import { Profile } from './profile';
import { withAuthProtection } from '../../hoc';
export default withAuthProtection(Profile);