SELECT id_marca_ as "Numero Marca", marca, SUM(vendas) AS "Numero de Vendas"
FROM fixed_database
INNER JOIN fixed_database1
ON fixed_database.id_marca_ = fixed_database1.id_marca GROUP BY marca ORDER BY SUM(vendas) DESC;

SELECT id_marca_, SUM(vendas * valor_do_veiculo) AS "Maior_Receita" FROM fixed_database GROUP BY id_marca_ ORDER BY Maior_Receita DESC LIMIT 1;

SELECT id_marca_, SUM(vendas * valor_do_veiculo) AS "Menor_Receita" FROM fixed_database GROUP BY id_marca_ ORDER BY Menor_Receita ASC LIMIT 1;

SELECT AVG(fixed_database.vendas) AS "Média de Vendas", fixed_database.id_marca_, fixed_database1.marca
FROM fixed_database
INNER JOIN fixed_database1 ON fixed_database.id_marca_ = fixed_database1.id_marca
GROUP BY fixed_database.id_marca_, fixed_database1.marca
ORDER BY AVG(fixed_database.vendas) ASC;

SELECT id_marca_, SUM(vendas * valor_do_veiculo) AS "Receita", SUM(vendas) AS "TotalVendas"
FROM fixed_database GROUP BY id_marca_ ORDER BY "Receita" / "TotalVendas" DESC;
