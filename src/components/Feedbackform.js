import React from "react";
export default class Feedbackform extends React.Component {
    state = {
        countries: []
    }
    async getCountries() {
        const response = await fetch("https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries");
        var countries = await response.text();
        countries = countries.split("\n");
        this.setState({ countries });
    }
    componentDidMount() {
        this.getCountries()
    }
    render() {
        return <div className="feedback-form p-12">

            <div>
                <h1 className="font-black text-xl">Thank you so much for taking the time!</h1>
                <p>Provide the below details!</p>
            </div>
            <form>
                <div className="form-group py-3">
                    <label className="font-semibold mb-1 block ml-2">First Name</label>
                    <input className="w-full rounded-md shadow-xl px-2 py-3" type="text" placeholder="John" />
                </div>
                <div className="form-group py-3">
                    <label className="font-semibold mb-1 block ml-2">Last Name</label>
                    <input className="w-full rounded-md shadow-xl px-2 py-3" type="text" placeholder="Doe" />
                </div>
                <div className="form-group py-3">
                    <label className="font-semibold mb-1 block ml-2">Email ID</label>
                    <input className="w-full rounded-md shadow-xl px-2 py-3" placeholder="example@sample.com" />
                </div>
                <div className="form-group py-3">
                    <label className="font-semibold mb-1 block ml-2">Country:</label>
                    <input list="browsers" className="w-full rounded-md shadow-xl px-2 py-3" name="browser" id="browser" value="India" />
                    <datalist id="browsers">
                        {this.state.countries.map((country, index) => {
                            return <option key={index} value={country} />
                        })}
                    </datalist></div>
                <div className="form-group py-3 w-full">
                    <label className="font-semibold mb-1 block ml-2">Phone Number</label>
                    <div className="flex items-center justify-center w-full">
                        <div className="w-1/6">
                            <div className="pr-2">
                                <input className="rounded-md shadow-xl px-2 py-3 w-full" placeholder="+91" />
                            </div>
                        </div>
                        <div className="w-5/6">
                            <input className="rounded-md shadow-xl px-2 py-3 w-full" placeholder="123456789" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    }
}