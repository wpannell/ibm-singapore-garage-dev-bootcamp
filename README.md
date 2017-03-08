# IBM Singapore Bluemix Garage Method Developer Bootcamp

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/wpannell/ibm-singapore-garage-dev-bootcamp.git)
## Getting Started

####Change your node version, clone the repo, install and run the tests:

````
nvm use v4.2.2
git clone git@github.com:wpannell/javascript-topic-trials.git app
cd app
npm install
npm run lint
npm run spec
````

___

###[The Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html):

* **_Passes the tests_**
* **_Reveals intention_**
* **_No duplication_**
* **_Fewest elements_**

___

###[The Transformation Priority Premise](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html):

````
({}–>nil) no code at all->code that employs nil

(nil->constant)

(constant->constant+) a simple constant to a more complex constant

(constant->scalar) replacing a constant with a variable or an argument

(statement->statements) adding more unconditional statements.

(unconditional->if) splitting the execution path

(scalar->array)

(array->container)

(statement->recursion)

(if->while)

(expression->function) replacing an expression with a function or algorithm

(variable->assignment) replacing the value of a variable.
````

___
