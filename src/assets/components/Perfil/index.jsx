import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
    // const usuario = {
    //     nome: 'Rodrigo Passos',
    //     avatar: 'https://github.com/rodripassos.png'
    // }

    return (
        <div className={styles.perfil}>
            {/* <img className='perfil-avatar' src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3> */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </div>
    )
}

export default Perfil;