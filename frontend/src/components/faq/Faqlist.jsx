import {faqs} from '../../assets/data/faqs'
import Faqitmes from './Faqitmes'

const Faqlist = () => {
  return (
    <ul className='mt-[38px] '>
        {faqs.map((items, index) => <Faqitmes items = {items} key = {index}/>)}
    </ul>
  )
}

export default Faqlist
