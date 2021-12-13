import styles from '../styles/NolanTest.module.scss'

const NolanTest = () => {
    return (
    <html className={styles.html}>
        <body className={styles.body}>

            <div className={styles.container}>
                <div className={styles.navbar}>
                    <img style={{marginTop:'3px'}} width="400px" height="auto" src="https://telephonieip.standardenligne.fr/static/media/logo.9db1994e.svg" alt="logo-profil"/>
                    <i style={{fontSize: '70px',fontWeight: 'bold', float: 'right', marginRight: '30px', paddingTop: '10px', cursor: 'pointer', color: '#00468b',}} class="far fa-bars"></i>
                </div>
            
            
            <div className={styles.textcontainer1}>
                <p className={styles.font1}>Informations du forfait</p>
            </div>

            <div>
                <div className={styles.containerprogress}>
                    <div className={styles.weirdprogress1}></div>
                    <div className={styles.weirdprogress2}></div>

        <div className={styles.steps}>

                <div className={styles.stepSelected} >1
                <img src="https://i.ibb.co/B31CDDn/1024px-Eo-circle-grey-checkmark-svg-1.png" style={{weight: '65%', height: '65%', zIndex:'3', color:'#797979', paddingLeft: '20px', position: 'relative', align: 'center', display: 'flex', justifyContent: 'center', bottom: '5px', color: 'white', backgroundColor: 'transparent'}} alt="icon"></img>
                </div>

                <div className={styles.step} >2</div>
                <div className={styles.step} >3</div>    
        </div>
                </div>
            </div>
            


        <div className={styles.center}>
        <div className={styles.forfaitContainer}>

        <div className={styles.forfaitHeader}>
            <div style={{color: '#00468b', fontWeight: 'bold', paddingTop: '10px', fontSize: '30px'}}>Mensuel            
            <span>     </span><i class="fas fa-check-circle"></i>
        </div>
    </div>


            <div className={styles.items}>
                <div className={styles.forfait1}>Forfait 10/mois <br/>de réception</div>
                <div className={styles.forfait2}>Sur vos fixes et mobiles</div>
                <div className={styles.forfait3}>14.90€ HT</div>
            </div>
            </div>
</div>        

        <div>
            <div className={styles.separator1}>
            </div>
        </div>

        <div className={styles.numberContainer}>
            <div className={styles.numbertype}>Type de numéro :</div>
            <div className={styles.number}>Numéro Argent : 01 87 200 200</div>
            <div className={styles.region}>Zone :</div>
            <div className={styles.city}>Paris - 01</div>
        </div>

        <div className={styles.buttonContainer}>
            <button className={styles.button}>SUIVANT</button>
        </div>

        <div className={styles.bottomContainer}></div>

         </div>
    </body>
</html>
    )
}

export default NolanTest;