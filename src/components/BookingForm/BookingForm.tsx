import { useState } from 'react'
import './BookingForm.css'

export default function BookingForm () {
    const [travelclass, setTravelclass] = useState("second class");
    const [amount, setAmount] = useState("1");
    const [title, setTitle] = useState("ms");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    function submit (event) {
        event.preventDefault();

        const result = {
            class: travelclass,
            amount: amount,
            title: title,
            firstName: firstName,
            lastName: lastName,
            acceptTerms: acceptTerms
        }
        console.log(result)

    }

    return <form className="bookingform">
        <h1>Åka tåg</h1>
        <p> Stockholm 19.30 ➡ Göteborg 14.45</p>
        <fieldset>
            <legend>Klass</legend>
            <label>
                <input type="radio" name="class" value="second class" checked={travelclass == "second class"} onChange={e=> setTravelclass(e.target.value)}  />
                2:a klass
            </label>
            <label>
                <input type="radio" name="class" value="first class" checked={travelclass == "first class"} onChange={e=> setTravelclass(e.target.value)} />
                1:a klass
            </label>
        </fieldset>
        <label>
            Antal biljetter
            <select name="amount" value={amount} onChange={e=> setAmount(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </label>
        <label>
            Titel
            <select value={title} onChange={e=> setTitle(e.target.value)}>
                <option value="ms">Ms.</option>
                <option value="mrs">Mrs.</option>
                <option value="mr">Mr.</option>
            </select>
        </label>
        <label>
            Förnamn
            <input value={firstName} onChange={e=> setFirstName(e.target.value)} />
        </label>
        <label>
            Efternamn
            <input value={lastName} onChange={e=> setLastName(e.target.value)} />
        </label>
        <label>
            <input name="acceptTerms" type="checkbox" defaultChecked={acceptTerms} onChange={e=>  setAcceptTerms(e.target.checked)} />
            Godkänner villkoren
        </label>
        <button onClick={submit}>
            Boka biljetter
        </button>
    </form>
}