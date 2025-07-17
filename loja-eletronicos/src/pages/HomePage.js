import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { buscarProdutos } from '../services/mockapi';
import ProductCard from '../components/ProductCard'; // 2. Importe o ProductCard
import { Container, Typography, Grid, Button } from '@mui/material'; // Adicione Button
import { Link } from 'react-router-dom'; // Importe o Link


function HomePage() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const data = await buscarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchProdutos();
  }, []);

 return (
    <div>
      <Header />
      <Container sx={{ mt: 4,mb: 4}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h4" gutterBottom>
            Nossos Produtos
        </Typography>
          <Button component={Link} to="/cadastrar" variant="contained" color="primary">
            Adicionar Produto
           </Button>
        </div>
          <Grid container spacing={3}>
          {produtos.map((produto) => (
            <Grid item key={produto.id} xs={12} sm={6} md={4}>
              <ProductCard produto={produto} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}


export default HomePage;