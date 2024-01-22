import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const Reposlist = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(true);

    //vai ser chamado qdo o componente for montado []
    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(
                (resJson) => {
                    setTimeout(() => {
                        setEstaCarregando(false);
                        setRepos(resJson);
                        if (resJson.length > 0) {
                            setDeuErro(false);
                        } else {
                            setDeuErro(true);
                        }
                    }, 1000);
                },
                (error) => {
                    setDeuErro(true);
                }
            )
    }, [nomeUsuario]);


    return (
        <div className="container">
            {
                estaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    deuErro ? (
                        <h1>Usuário {nomeUsuario} não existe na base de dados do Github.</h1>
                    ) : (
                        <ul className={styles.list}>
                            {/* {repos.map(repositorio => ( */}
                            {repos.map(({ id, name, language, html_url }) => (
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.itemName}>
                                        <b>Nome: </b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem: </b>
                                        {language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                                </li>
                            ))}
                        </ul>
                    )
                )}
        </div>
    )
}

export default Reposlist; 