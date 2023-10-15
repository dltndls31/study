const UserCard = (props) => {
    // const myText = props.myText
    // const myColor = props.myColor
    const { myImage, myIcon, myName, myEmail, majorAge, subtitle } = props

    return (
        <div className="box-border flex flex h-96 w-60 flex-col divide-y-4 border-4 p-4">
            <img src={myImage} width={100}></img>
            <img class="object-contain"></img>
            <img src={myIcon} width={100}></img>
            <div>
                <p class="p-4 text-center text-2xl font-bold">{myName}</p>
                <p class="p-2 text-center">{myEmail}</p>
                <p class="p-2 text-center">{majorAge}</p>
            </div>
            <div class="border-t"></div>
            <p class="p-4 underline underline-offset-1">{subtitle}</p>
        </div>
    )
}

const Container = () => {
    return (
        <div className="flex grid grid-cols-3 grid-rows-2 gap-4">
            <UserCard
                myImage={
                    'https://this-person-does-not-exist.com/img/avatar-gen599f0c643b5afcd61197af920e854482.jpg'
                }
                myIcon={''}
                myName={'SOO'}
                myEmail={'dtd131@naver.com'}
                majorAge={'psychology / 100'}
                subtitle={'subtitle'}
            />
            <UserCard
                myImage={
                    'https://this-person-does-not-exist.com/img/avatar-gen116c0a52fb157d309ea984f69c7e480d.jpg'
                }
                myName={'MOO'}
                myEmail={'youngmin_1111@naver.com'}
                majorAge={'ecology / 200'}
                subtitle={'subtitle'}
            />
            <UserCard
                myImage={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              
                    'https://this-person-does-not-exist.com/img/avatar-gen11a8f2e7cc737137f8786fa06726fbb7.jpg'
                }
                myName={'DOO'}
                myEmail={'vanwon16@naver.com'}
                majorAge={'medication / 300'}
                subtitle={'subtitle'}
            />
            <UserCard
                myImage={
                    'https://this-person-does-not-exist.com/img/avatar-genfe49781e722539950e31b028a3045102.jpg'
                }
                myName={'COO'}
                myEmail={'tmdwns7429@gmail.com'}
                majorAge={'photography / 400'}
                subtitle={'subtitle'}
            />
            <UserCard
                myImage={
                    'https://this-person-does-not-exist.com/img/avatar-genaec028d50eacdeba87525314eda4cc65.jpg'
                }
                myName={'HOO'}
                myEmail={'calfadventure@naver.com'}
                majorAge={'statistics / 500'}
                subtitle={'subtitle'}
            />
            <UserCard
                myImage={
                    'https://this-person-does-not-exist.com/img/avatar-gen11a8f2e7cc737137f8786fa06726fbb7.jpg'
                }
                myName={'JOO'}
                myEmail={'arame@anyang.ac.kr'}
                majorAge={'business / 600'}
                subtitle={'subtitle'}
            />
        </div>
    )
}

export default Container
