"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { caseFormSchema, CaseFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Trash2 } from "lucide-react";
import { EstrategiaSection, ResultadosSection, DepoimentoSection, ContextoSection } from "./form-sections";

export function CaseForm() {
  const [meses, setMeses] = useState([1, 2, 3]); // Inicia com 3 meses

  const form = useForm<CaseFormData>({
    resolver: zodResolver(caseFormSchema),
    defaultValues: {
      dor: [],
      estrategia_c: [],
      estrategia_h: [],
      estrategia_a: [],
      estrategia_v: [],
      estrategia_i: [],
      meses: [],
    },
  });

  const addMonth = () => {
    setMeses([...meses, meses.length + 1]);
  };

  const removeMonth = (index: number) => {
    if (meses.length > 1) {
      setMeses(meses.filter((_, i) => i !== index));
    }
  };

  const onSubmit = (data: CaseFormData) => {
    console.log("Form data:", data);
    // Aqui você pode enviar os dados para uma API
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-purple-50 min-h-screen">
      <Card className="shadow-lg">
        <CardHeader className="bg-white border-b">
          <CardTitle className="text-3xl font-bold text-gray-800">
            📋 Formulário de Coleta de Case - F5 Estratégia
          </CardTitle>
          <p className="mt-4 text-gray-600">
            <strong>INSTRUÇÕES PARA O GESTOR DE TRÁFEGO:</strong><br />
            Preencha todas as seções com o máximo de detalhes possível. Quanto mais informações, melhor o storytelling do case. Se não souber algum dado exato, coloque uma estimativa e sinalize com "(aprox.)".
          </p>
        </CardHeader>

        <CardContent className="p-0">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
            {/* SEÇÃO 1: IDENTIFICAÇÃO DO CLIENTE */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl border-b pb-2">SEÇÃO 1: IDENTIFICAÇÃO DO CLIENTE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="nome_clinica">Nome da Clínica:</Label>
                  <Input
                    id="nome_clinica"
                    {...form.register("nome_clinica")}
                    placeholder="Digite o nome completo"
                    className="mt-1"
                  />
                  {form.formState.errors.nome_clinica && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.nome_clinica.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="cidade_estado">Cidade/Estado:</Label>
                  <Input
                    id="cidade_estado"
                    {...form.register("cidade_estado")}
                    placeholder="Ex: Florianópolis/SC"
                    className="mt-1"
                  />
                  {form.formState.errors.cidade_estado && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.cidade_estado.message}</p>
                  )}
                </div>

                <div>
                  <Label>Tipo de Clínica:</Label>
                  <RadioGroup
                    value={form.watch("tipo_clinica")}
                    onValueChange={(value) => form.setValue("tipo_clinica", value as any)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="geral" id="geral" />
                      <Label htmlFor="geral">Clínica Odontológica Geral</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ortodontia" id="ortodontia" />
                      <Label htmlFor="ortodontia">Ortodontia Especializada</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="implantodontia" id="implantodontia" />
                      <Label htmlFor="implantodontia">Implantodontia</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="odontopediatria" id="odontopediatria" />
                      <Label htmlFor="odontopediatria">Odontopediatria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hof" id="hof" />
                      <Label htmlFor="hof">Harmonização Facial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="franquia" id="franquia" />
                      <Label htmlFor="franquia">Franquia Odontológica</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outro" id="outro" />
                      <Label htmlFor="outro">Outro:</Label>
                      <Input
                        {...form.register("tipo_clinica_outro")}
                        placeholder="Especifique"
                        className="ml-2 flex-1"
                      />
                    </div>
                  </RadioGroup>
                  {form.formState.errors.tipo_clinica && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.tipo_clinica.message}</p>
                  )}
                </div>

                <div>
                  <Label>Perfil do Cliente (marque o principal):</Label>
                  <RadioGroup
                    value={form.watch("perfil_cliente")}
                    onValueChange={(value) => form.setValue("perfil_cliente", value as any)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pequena" id="pequena" />
                      <Label htmlFor="pequena">Clínica pequena/em crescimento (1-3 cadeiras)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="media" id="media" />
                      <Label htmlFor="media">Clínica média estabelecida (4-8 cadeiras)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="grande" id="grande" />
                      <Label htmlFor="grande">Clínica grande/múltiplas unidades (9+ cadeiras)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="referencia" id="referencia" />
                      <Label htmlFor="referencia">Profissional referência/autoridade local</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="saindo_franquia" id="saindo_franquia" />
                      <Label htmlFor="saindo_franquia">Saindo de franquia/mudança de bandeira</Label>
                    </div>
                  </RadioGroup>
                  {form.formState.errors.perfil_cliente && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.perfil_cliente.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="tempo_parceria">Tempo de parceria com a f5:</Label>
                  <Input
                    id="tempo_parceria"
                    type="number"
                    {...form.register("tempo_parceria", { valueAsNumber: true })}
                    placeholder="Em meses"
                    className="mt-1"
                  />
                  {form.formState.errors.tempo_parceria && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.tempo_parceria.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SEÇÃO 2: CENÁRIO ANTES DA F5 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl border-b pb-2">SEÇÃO 2: CENÁRIO ANTES DA F5 (O PROBLEMA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Qual era a principal dor/desafio do cliente antes de nos contratar? (Marque todos que se aplicam)</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      { value: "agenda_vaga", label: "Agenda com horários vagos" },
                      { value: "faturamento_instavel", label: "Faturamento instável/imprevisível" },
                      { value: "leads_desqualificados", label: "Leads desqualificados" },
                      { value: "conversao_baixa", label: "Taxa de conversão baixa" },
                      { value: "cac_alto", label: "CAC muito alto" },
                      { value: "equipe_despreparada", label: "Equipe comercial despreparada" },
                      { value: "sem_retorno", label: "Marketing sem retorno claro" },
                      { value: "dependencia_indicacoes", label: "Dependência de indicações" },
                      { value: "medo_expandir", label: "Queria expandir mas tinha medo" },
                      { value: "perdeu_fluxo_franquia", label: "Saiu de franquia e perdeu fluxo" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.value}
                          checked={form.watch("dor")?.includes(option.value) || false}
                          onCheckedChange={(checked) => {
                            const currentDores = form.watch("dor") || [];
                            if (checked) {
                              form.setValue("dor", [...currentDores, option.value]);
                            } else {
                              form.setValue("dor", currentDores.filter(d => d !== option.value));
                            }
                          }}
                        />
                        <Label htmlFor={option.value}>{option.label}</Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="dor_outro"
                        checked={form.watch("dor")?.includes("outro") || false}
                        onCheckedChange={(checked) => {
                          const currentDores = form.watch("dor") || [];
                          if (checked) {
                            form.setValue("dor", [...currentDores, "outro"]);
                          } else {
                            form.setValue("dor", currentDores.filter(d => d !== "outro"));
                          }
                        }}
                      />
                      <Label htmlFor="dor_outro">Outro:</Label>
                      <Input
                        {...form.register("dor_outro")}
                        placeholder="Especifique"
                        className="ml-2 flex-1"
                      />
                    </div>
                  </div>
                  {form.formState.errors.dor && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.dor.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="faturamento_antes">Faturamento médio ANTES da f5:</Label>
                  <Input
                    id="faturamento_antes"
                    {...form.register("faturamento_antes")}
                    placeholder="R$ /mês"
                    className="mt-1"
                  />
                  {form.formState.errors.faturamento_antes && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.faturamento_antes.message}</p>
                  )}
                </div>

                <div>
                  <Label>Como o cliente chegou até a f5?</Label>
                  <RadioGroup
                    value={form.watch("origem_cliente")}
                    onValueChange={(value) => form.setValue("origem_cliente", value as any)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="indicacao" id="origem_indicacao" />
                      <Label htmlFor="origem_indicacao">Indicação</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="anuncio" id="origem_anuncio" />
                      <Label htmlFor="origem_anuncio">Anúncio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="redes_sociais" id="origem_redes" />
                      <Label htmlFor="origem_redes">Redes sociais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="google" id="origem_google" />
                      <Label htmlFor="origem_google">Google</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evento" id="origem_evento" />
                      <Label htmlFor="origem_evento">Evento/Palestra</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outro" id="origem_outro" />
                      <Label htmlFor="origem_outro">Outro:</Label>
                      <Input
                        {...form.register("origem_cliente_outro")}
                        placeholder="Especifique"
                        className="ml-2 flex-1"
                      />
                    </div>
                  </RadioGroup>
                  {form.formState.errors.origem_cliente && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.origem_cliente.message}</p>
                  )}
                </div>

                <div>
                  <Label>O cliente já havia tentado marketing digital antes?</Label>
                  <RadioGroup
                    value={form.watch("mkt_anterior")}
                    onValueChange={(value) => form.setValue("mkt_anterior", value as any)}
                    className="mt-2 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outra_agencia" id="mkt_outra" />
                      <Label htmlFor="mkt_outra">Sim, com outra agência (resultados ruins)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interno" id="mkt_interno" />
                      <Label htmlFor="mkt_interno">Sim, internamente (não deu certo)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="primeira_vez" id="mkt_primeira" />
                      <Label htmlFor="mkt_primeira">Não, primeira vez</Label>
                    </div>
                  </RadioGroup>
                  {form.formState.errors.mkt_anterior && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.mkt_anterior.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* SEÇÃO 3: DADOS DE PERFORMANCE */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl border-b pb-2">SEÇÃO 3: DADOS DE PERFORMANCE (NÚCLEO DO CASE)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <Label className="font-semibold">PERÍODO DE ANÁLISE</Label>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="data_inicio">Data de início:</Label>
                      <Input
                        id="data_inicio"
                        type="date"
                        {...form.register("data_inicio")}
                        className="mt-1"
                      />
                      {form.formState.errors.data_inicio && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.data_inicio.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="data_fim">Data de fim:</Label>
                      <Input
                        id="data_fim"
                        type="date"
                        {...form.register("data_fim")}
                        className="mt-1"
                      />
                      {form.formState.errors.data_fim && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.data_fim.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="meses_analisados">Total de meses analisados:</Label>
                      <Input
                        id="meses_analisados"
                        type="number"
                        {...form.register("meses_analisados", { valueAsNumber: true })}
                        className="mt-1"
                      />
                      {form.formState.errors.meses_analisados && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.meses_analisados.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dados dos meses */}
                {meses.map((mes, index) => (
                  <Card key={index} className="border-t pt-6">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">
                          MÊS {mes} ({index === 0 ? "ESTRUTURAÇÃO" : index === 1 ? "OTIMIZAÇÃO" : "CONSOLIDAÇÃO"})
                        </CardTitle>
                        {meses.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeMonth(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <Label>Mês/Ano:</Label>
                          <Input
                            {...form.register(`meses.${index}.mes_ano`)}
                            placeholder="Ex: 01/2024"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Investimento em Tráfego:</Label>
                          <Input
                            {...form.register(`meses.${index}.investimento`)}
                            placeholder="R$"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Leads Gerados:</Label>
                          <Input
                            type="number"
                            {...form.register(`meses.${index}.leads`, { valueAsNumber: true })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>CPL (Custo por Lead):</Label>
                          <Input
                            {...form.register(`meses.${index}.cpl`)}
                            placeholder="R$"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Agendamentos:</Label>
                          <Input
                            type="number"
                            {...form.register(`meses.${index}.agendamentos`, { valueAsNumber: true })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Comparecimentos:</Label>
                          <Input
                            type="number"
                            {...form.register(`meses.${index}.comparecimentos`, { valueAsNumber: true })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Fechamentos/Vendas:</Label>
                          <Input
                            type="number"
                            {...form.register(`meses.${index}.fechamentos`, { valueAsNumber: true })}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Faturamento Total:</Label>
                          <Input
                            {...form.register(`meses.${index}.faturamento_mes`)}
                            placeholder="R$"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Principal ação realizada neste mês:</Label>
                        <Textarea
                          {...form.register(`meses.${index}.acao_mes`)}
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button type="button" variant="outline" onClick={addMonth}>
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Mês
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SEÇÃO 4: ESTRATÉGIA APLICADA */}
            <EstrategiaSection form={form} />

            {/* SEÇÃO 5: TRANSFORMAÇÃO E RESULTADOS */}
            <ResultadosSection form={form} />

            {/* SEÇÃO 6: DEPOIMENTO E STORYTELLING */}
            <DepoimentoSection form={form} />

            {/* SEÇÃO 7: CONTEXTO ADICIONAL */}
            <ContextoSection form={form} />

            {/* Botão de envio */}
            <div className="flex justify-end pt-6">
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Enviar Formulário
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
