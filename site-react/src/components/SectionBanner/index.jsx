import { useState } from 'react';
import { useImovel } from '../../hook/useImovel';
import './style.css';

const operacoes = [
    { valor: '', rotulo: 'Operação' },
    { valor: 'venda', rotulo: 'Venda' },
    { valor: 'locacao', rotulo: 'Locação' }
];

const tipos = [
    { valor: '', rotulo: 'Tipo Imóvel' },
    { valor: 'apto', rotulo: 'Apartamento' },
    { valor: 'casa', rotulo: 'Casa' },
    { valor: 'sobrado', rotulo: 'Sobrado' },
    { valor: 'terreno', rotulo: 'Terreno' }
];

const cidades = [
    { valor: '', rotulo: 'Cidade' },
    { valor: 'coronel', rotulo: 'Coronel Vivida' },
    { valor: 'beltrao', rotulo: 'Francisco Beltrão' },
    { valor: 'pato', rotulo: 'Pato Branco' },
    { valor: 'saudade', rotulo: 'Saudade do Iguaçu' }
]

const bairros = [
    { valor: '', rotulo: 'Bairro' },
    { valor: 'brasilia', rotulo: 'Brasilia' },
    { valor: 'centro', rotulo: 'Centro' },
    { valor: 'lasalle', rotulo: 'La Salle' },
    { valor: 'pinheiro', rotulo: 'Pinheiros' }
];

export function SectionBanner() {

    const { imoveis } = useImovel();

    const{filter, setFilter} = useState({});

    function handleFilter() {
        
    }

    return (
        <section id="banner">
            <div className="banner-content">
                <h1>Lugar exato para você realizar os seus sonhos</h1>
                <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>
            </div>
            <div className="banner-filter">
                <div className="filter-fields">

                    <form>
                        <select>
                            {operacoes.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}
                        </select>

                        <select>
                            {tipos.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}
                        </select>

                        <select>
                            {cidades.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}                            
                        </select>

                        <select>
                            {bairros.map((item,index) => (
                                <option key={ index } value={ item.valor }>{ item.rotulo }</option>
                            ))}                           
                        </select>
                    </form>

                </div>

                <div className="filter-result">
                    <p className="result-value">{ imoveis.length }</p>
                    <p className="result-label">Imóveis</p>
                    <button onClick={ handleFilter }>Filtrar</button>
                </div>
            </div>
        </section>
    )

}